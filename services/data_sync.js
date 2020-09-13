var {db, sqlite3} = require("../database");
const fastcsv = require("fast-csv");
const fs = require("fs");
const path = require("path");
const got = require("got");
const FormData = require("form-data");

const remoteServer = "https://learn.simbibot.com/api/schools-management/"; // change b4 push
let localDb;
const localDbPath = __dirname + "/../data.db";

function DataSyncService() {
  function createDataBackup() {
    return new Promise((resolve, reject) => {
      const p1 = createEvaluationBackup();
      const p2 = createExaminationBackup();
      Promise.all([p1, p2])
        .then((val) => resolve(val))
        .catch((err) => reject(err));
    });
  }

  function createEvaluationBackup() {
    return new Promise((resolve, reject) => {
      db.serialize(() => {
        db.all(
          `SELECT * FROM Evaluations JOIN (SELECT id as uid, firstname, email from Users)  on Evaluations.user_id = uid JOIN (SELECT name as subject_name, id as subject_uid FROM Subjects) on Evaluations.subject_id = subject_uid JOIN (SELECT topic, id as topic_uid FROM Topics) on Evaluations.topic_id = topic_uid WHERE status = 'completed' AND  datetime(completed_at ) Not NULL ORDER by datetime(completed_at)`,
          [],
          (err, data) => {
            if (err) {
              console.log(err);
              throw Error("Error reading evaluation data from database");
            }

            if (data.length === 0) return resolve(true);
            const dirPath = path.join(process.cwd(), "data");

            if (!fs.existsSync(dirPath)) {
              fs.mkdirSync(dirPath);
            }

            const filePath = dirPath + "/evaluations.csv";
            const evalStream = fs.createWriteStream(filePath);
            // console.log('dir ', dirPath, ' file', filePath)
            fastcsv
              .write(data, { headers: true })
              .on("finish", async () => {
                resolve({ path: filePath });
              })
              .on("error", () => {
                reject(false);
              })
              .pipe(evalStream);
          }
        );
      });
    });
  }

  function createExaminationBackup() {
    return new Promise((resolve, reject) => {
      db.serialize(() => {
        db.all(
          `SELECT * FROM ExamAttempts  JOIN (SELECT id as uid, firstname, email from Users)  on ExamAttempts.user_id = uid JOIN (SELECT name as subject_name, id as subject_uid FROM Subjects) on ExamAttempts.subject_id = subject_uid WHERE completed_at is NOT NULL ORDER by datetime(completed_at)`,
          [],
          (err, data) => {
            if (err) {
              console.log(err);
              throw Error("Error reading exams data from database");
            }

            if (data.length === 0) return resolve(true);

            const dirPath = path.join(process.cwd(), "data");

            if (!fs.existsSync(dirPath)) {
              // console.log('no data dir')
              fs.mkdirSync(dirPath);
            }

            const filePath = dirPath + "/examattempts.csv";
            const evalStream = fs.createWriteStream(filePath);

            fastcsv
              .write(data, { headers: true })
              .on("finish", async () => {
                resolve({ path: filePath });
              })
              .on("error", () => {
                reject(false);
              })
              .pipe(evalStream);
          }
        );
      });
    });
  }

  function exportUsersTable() {
    return new Promise((resolve, reject) => {
      db.serialize(() => {
        db.all(`SELECT * FROM Users`, [], (err, data) => {
          if (err) {
            console.log(err);
            throw Error("Error reading user data from database");
          }

          if (data.length === 0) return resolve(true);

          const dirPath = path.join(process.cwd(), "data");

          if (!fs.existsSync(dirPath)) {
            // console.log('no data dir')
            fs.mkdirSync(dirPath);
          }

          const filePath = dirPath + "/users_table.csv";
          const evalStream = fs.createWriteStream(filePath);

          fastcsv
            .write(data, { headers: true })
            .on("finish", async () => {
              resolve({ path: filePath });
            })
            .on("error", () => {
              reject(false);
            })
            .pipe(evalStream);
        });
      });
    });
  }

  function exportTracksTable() {
    return new Promise((resolve, reject) => {
      db.serialize(() => {
        db.all(`SELECT * FROM Tracks`, [], (err, data) => {
          if (err) {
            console.log(err);
            throw Error("Error reading tracks data from database");
          }

          if (data.length === 0) return resolve(true);

          const dirPath = path.join(process.cwd(), "data");

          if (!fs.existsSync(dirPath)) {
            // console.log('no data dir')
            fs.mkdirSync(dirPath);
          }

          const filePath = dirPath + "/tracks_table.csv";
          const evalStream = fs.createWriteStream(filePath);

          fastcsv
            .write(data, { headers: true })
            .on("finish", async () => {
              resolve({ path: filePath });
            })
            .on("error", () => {
              reject(false);
            })
            .pipe(evalStream);
        });
      });
    });
  }

  function exportExaminationTable() {
    return new Promise((resolve, reject) => {
      db.serialize(() => {
        db.all(`SELECT * FROM ExamAttempts`, [], (err, data) => {
          if (err) {
            console.log(err);
            throw Error("Error reading exam data from database");
          }

          if (data.length === 0) return resolve(true);

          const dirPath = path.join(process.cwd(), "data");

          if (!fs.existsSync(dirPath)) {
            // console.log('no data dir')
            fs.mkdirSync(dirPath);
          }

          const filePath = dirPath + "/examattempts_table.csv";
          const evalStream = fs.createWriteStream(filePath);

          fastcsv
            .write(data, { headers: true })
            .on("finish", async () => {
              resolve({ path: filePath });
            })
            .on("error", () => {
              reject(false);
            })
            .pipe(evalStream);
        });
      });
    });
  }

  function exportEvaluationTable() {
    return new Promise((resolve, reject) => {
      db.serialize(() => {
        db.all(`SELECT * FROM Evaluations`, [], (err, data) => {
          if (err) {
            console.log(err);
            throw Error("Error exporting evaluations data from database");
          }

          if (data.length === 0) return resolve(true);

          const dirPath = path.join(process.cwd(), "data");

          if (!fs.existsSync(dirPath)) {
            // console.log('no data dir')
            fs.mkdirSync(dirPath);
          }

          const filePath = dirPath + "/evaluations_table.csv";
          const evalStream = fs.createWriteStream(filePath);

          fastcsv
            .write(data, { headers: true })
            .on("finish", async () => {
              resolve({ path: filePath });
            })
            .on("error", () => {
              reject(false);
            })
            .pipe(evalStream);
        });
      });
    });
  }

  function synchronizeData({ type, fileName, id }) {
    return new Promise(async (resolve, reject) => {
      const filePath = `${process.cwd()}/data/${fileName}`;

      if (!fs.existsSync(filePath)) {
        return reject({
          success: false,
          message: `No backup file found for ${type}`,
        });
      }

      const formdata = new FormData();

      let stream = fs.createReadStream(filePath);

      formdata.append("result_file", stream, {
        knownLength: fs.statSync(filePath).size,
      });

      formdata.append("type", type);

      try {
        const res = await got(`${remoteServer}${id}/upload-result`, {
          method: "POST",
          body: formdata,
          headers: {
            Accept: "application/json",
            ...formdata.getHeaders(),
          },
        });
        console.log(`${type}  csv uploaded`, res.body);

        resolve(res.body);
      } catch (e) {
        console.log(
          `${type} upload error `,
          e.response.body,
          e.response.status
        );
        reject(e.response.body);
      }
    });
  }

  function importUsersTable() {
    return new Promise((resolve, reject) => {
      const dirPath = path.join(process.cwd(), "data");
      const filePath = dirPath + "/users_table.csv";
      if (!fs.existsSync(filePath)) return resolve(true);;

      let stream = fs.createReadStream(filePath);

      let csvData = [];
      let csvStream = fastcsv
        .parse()
        .on("data", function (data) {
          csvData.push(data);
        })
        .on("end", function () {
          // remove the first line: header
          csvData.shift();

          // connect to the sqlite database
          // save csvData

          if (!localDb) {
            localDb = new sqlite3.Database(localDbPath);
          }

          localDb.serialize(() => {
            localDb.run(
              "INSERT INTO Users(id, user_id, email, firstname, lastname, password, remember_token, reputation, usertype, created_at, updated_at)",
              csvData,
              (err) => {
                if (err) {
                  return reject(err);
                }
                resolve(true);
              }
            );
          });
        });

      stream.pipe(csvStream);
    });
  }

  function importTracksTable() {
    return new promise((resolve, reject) => {
      const dirPath = path.join(process.cwd(), "data");
      const filePath = dirPath + "/tracks_table.csv";
      if (!fs.existsSync(filePath)) return resolve(true);

      let stream = fs.createReadStream(filePath);

      let csvData = [];
      let csvStream = fastcsv
        .parse()
        .on("data", function (data) {
          csvData.push(data);
        })
        .on("end", function () {
          // remove the first line: header
          csvData.shift();

          // connect to the sqlite database
          // save csvData

          if (!localDb) {
            localDb = new sqlite3.Database(localDbPath);
          }

          localDb.serialize(() => {
            localDb.run(
              "INSERT INTO Tracks (id, user_id, user_name, topic_id, topic_name, subject_id, subject_name, track_type, time_spent, started_at, completed_at, total_number_of_levels, current_level_index, current_question_index, created_at, updated_at)",
              csvData,
              (err) => {
                if (err) {
                  return reject(err);
                }
                resolve(true);
              }
            );
          });
        });

      stream.pipe(csvStream);
    });
  }

  function importExamTable() {
    return new promise((resolve, reject) => {
      const dirPath = path.join(process.cwd(), "data");
      const filePath = dirPath + "/examattempts_table.csv";
      if (!fs.existsSync(filePath)) return resolve(true);

      let stream = fs.createReadStream(filePath);

      let csvData = [];
      let csvStream = fastcsv
        .parse()
        .on("data", function (data) {
          csvData.push(data);
        })
        .on("end", function () {
          // remove the first line: header
          csvData.shift();

          // connect to the sqlite database
          // save csvData

          if (!localDb) {
            localDb = new sqlite3.Database(localDbPath);
          }

          localDb.serialize(() => {
            localDb.run(
              "INSERT INTO ExamAttempts (id, session_id, user_id, exam_id, exam_name, subject_id, topic_id, score, completed_at, start_time, end_time, recommended_topic, exam_type, total_questions, created_at, updated_at)",
              csvData,
              (err) => {
                if (err) {
                  return reject(err);
                }
                resolve(true);
              }
            );
          });
        });

      stream.pipe(csvStream);
    });
  }

  function importEvalTable() {
    return new promise((resolve, reject) => {
      const dirPath = path.join(process.cwd(), "data");
      const filePath = dirPath + "/evaluations_table.csv";
      if (!fs.existsSync(filePath)) return resolve(true);

      let stream = fs.createReadStream(filePath);

      let csvData = [];
      let csvStream = fastcsv
        .parse()
        .on("data", function (data) {
          csvData.push(data);
        })
        .on("end", function () {
          // remove the first line: header
          csvData.shift();

          // connect to the sqlite database
          // save csvData

          if (!localDb) {
            localDb = new sqlite3.Database(localDbPath);
          }

          localDb.serialize(() => {
            localDb.run(
              "INSERT INTO Evaluations (id, topic_id, subject_id, status, user_id, completed_at, start_time, end_time, score, createdAt, updatedAt)",
              csvData,
              (err) => {
                if (err) {
                  return reject(err);
                }
                resolve(true);
              }
            );
          });
        });

      stream.pipe(csvStream);
    });
  }

  function backUpUserData() {
    return Promise((resolve, reject) => {
      const p1 = exportEvaluationTable();
      const p2 = exportExaminationTable();
      const p3 = exportUsersTable();
      const p4 = exportTracksTable();
      Promise.all([p1, p2, p3, p4])
        .then((val) => {         
          resolve(true);
        })
        .catch((err) => reject(err));
    });
  }

  function importUserData() {
    return Promise((resolve, reject) => {
      const p1 = importEvalTable();
      const p2 = importExamTable();
      const p3 = importTracksTable();
      const p4 = importUsersTable();
      Promise.all([p1, p2, p3, p4])
        .then((val) => {
          resolve(true);
        })
        .catch((err) => reject(err));
    });
  }

  return {
    backUpUserData,
    importUserData,
    createDataBackup,
    synchronizeData,
    createExaminationBackup,
    createEvaluationBackup,
  };
}

module.exports = DataSyncService;
