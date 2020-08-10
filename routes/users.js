var express = require("express");
var router = express.Router();
var multer = require("multer");
var path = require("path");
var async = require("async");
var xlsx = require("xlsx");

const upload_dir = path.join(__dirname, "/../uploads");
var upload = multer({ dest: upload_dir });

const db = require("../database/db");
const bcrypt = require("bcryptjs");

router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/is_teacher_created", async (req, res) => {
  db.serialize(async () => {
    db.all("Select * from settings", [], (err, data) => {
      if (err) console.log(err);

      let settings = data[0];

      if (settings.has_created_teacher == 1) {
        return res
          .status(200)
          .json({ data: true, show_sweet: settings.should_show_novel });
      } else {
        return res.status(200).json({ data: false });
      }
    });
  });
});

router.post("/create_teacher", async (req, res) => {
  try {
    const data = req.body;
    const salt = await bcrypt.genSalt(5);
    const hash = await bcrypt.hash(data.password, salt);
    const user_type = "teacher";

    db.serialize(() => {
      db.all(
        `select * from users where email='${body.email}'`,
        [],
        async (err, data) => {
          if (err) {
            console.log(err);
            return res.status(422).send(err);
          }

          if (data.length > 0) {
            return res.status(422).send({ message: "Email has been taken" });
          }

          db.serialize(async () => {
            db.run(
              `insert into users(email, password, usertype, created_at, updated_at) values ('${
                data.email
              }', '${hash}', 'teacher', '${
                data.created_at || new Date().toISOString()
              }', '${data.updated_at || new Date().toISOString()}')`,
              [],
              (err) => {
                if (err) {
                  console.log(err);
                  return res.status(422).send(err);
                }

                db.run(
                  "update settings set has_created_teacher = 1 where id = 1"
                );
                return res.status(200).json({ message: "successful" });
              }
            );
          });
        }
      );
    });
  } catch (e) {
    console.log(e);
    return res.status(422).send(e);
  }
});

router.post("/login", async (req, res) => {
  try {
    const body = req.body;
    // console.log(data);
    db.serialize(() => {
      db.all(
        `select * from users where email='${body.email}'`,
        [],
        async (err, data) => {
          if (err) {
            console.log(err);
            return res.status(422).send(err);
          }

          if (data.length > 0) {
            let user = data[0];
            let ismatch = await bcrypt.compare(body.password, user.password);

            if (ismatch) {
              return res.status(200).send(user);
            } else {
              return res
                .status(422)
                .json({ message: "Invalid Email/Password" });
            }
          } else {
            return res.status(422).json({ message: "Invalid Email/Password" });
          }
        }
      );
    });
  } catch (e) {
    console.log(e);
    return res.status(422).send(e);
  }
});

router.post("/create_student", async (req, res) => {
  const body = req.body;

  try {
    const salt = await bcrypt.genSalt(5);
    const hash = await bcrypt.hash(body.password, salt);

    console.log(body);

    db.serialize(() => {
      db.all(
        `select * from users where email='${body.email}'`,
        [],
        async (err, data) => {
          if (err) {
            console.log(err);
            return res.status(422).send(err);
          }

          if (data.length > 0) {
            return res.status(422).send({ message: "Email has been taken" });
          }

          db.serialize(() => {
            db.run(
              `insert into users(email, password, firstname, lastname, usertype, created_at, updated_at) values('${
                body.email
              }', '${hash}', '${body.firstname}', '${
                body.lastname
              }', 'student', '${new Date().toISOString()}', '${new Date().toISOString()}' )`,
              [],
              (err) => {
                if (err) {
                  console.log(err);
                  return res.status(422).send(err);
                }

                return res.status(200).json({ message: "Successful" });
              }
            );
          });
        }
      );
    });
  } catch (e) {
    console.log(e);
    return res.status(422).send(e);
  }
});

router.get("/fetch_student", async (req, res) => {
  let page = req.query.page;
  let limit = 10;
  let offset = 0;
  db.serialize(() => {
    db.all(
      `select count(id)  from users where usertype='student'`,
      [],
      (err, data) => {
        if (err) {
          console.log(err);
          return res.status(422).send(err);
        }
        let count = data[0]["count(id)"];
        let pages = Math.ceil(parseInt(count) / limit);
        offset = limit * (page - 1);

        db.all(
          `select * from users where usertype='student'`,
          [],
          (err, users) => {
            if (err) {
              console.log(err);
              return res.status(422).send(err);
            }
            return res.status(200).json({
              data: users,
              page,
              total: pages,
              limit,
              offset,
              metric: count,
            });
          }
        );
      }
    );
  });
});

router.post("/bulk_upload_student", upload.single("file"), async (req, res) => {
  const filePath = path.join(__dirname, "/../uploads/" + req.file.filename);
  const wb = xlsx.readFile(filePath);
  const sheet_name_list = wb.SheetNames;
  const sheet = wb.Sheets[sheet_name_list[0]];
  const errors = [];

  studentsArray = xlsx.utils.sheet_to_json(sheet, {
    header: ["firstname", "lastname", "email", "password"],
  });

  console.log(studentsArray);

  if (studentsArray.length < 1) return res.status(200).send("success");

  if (studentsArray[0].firstname.includes("firstname"))
    studentsArray.splice(0, 1);

  try {
    async.each(
      studentsArray,
      async (student, callback) => {
        db.serialize(async () => {
          try {
            const salt = await bcrypt.genSalt(5);
            const hash = await bcrypt.hash(student.password, salt);

            db.run(
              `insert into users(firstname, lastname, email, password, usertype) values ('${student.firstname}', '${student.lastname}', '${student.email}', '${hash}', 'student')`,
              [],
              (err) => {
                if (err) {
                  errors.push(err);
                  callback;
                }

                callback;
              }
            );
          } catch (e) {
            console.log(e);
            // return res.status(422).send(e);
          }
        });
      },
      () => {
        return res.status(200).json({ message: "Successful", errors });
      }
    );
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
