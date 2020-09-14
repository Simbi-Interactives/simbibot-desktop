var { db, sqlite3 } = require("../database");
const path = require('path')
const fs = require('fs')
const electron = require("electron");
const fastcsv = require("fast-csv");


const app = electron.app;

module.exports = function BackUpAndUpdateService() {
    let localDb;
    const localDbPath = __dirname + "/../data.db";

  function importUsersTable() {
    return new Promise((resolve, reject) => {
      const dirPath = path.join(app.getPath("userData"), "simbibot/data");
      const filePath = dirPath + "/users_table.csv";
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
      const dirPath = path.join(app.getPath("userData"), "simbibot/data");
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
      const dirPath = path.join(app.getPath("userData"), "simbibot/data");
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
      const dirPath = path.join(app.getPath("userData"), "simbibot/data");
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
    return new Promise((resolve, reject) => {
      const p1 = exportEvaluationTable();
      const p2 = exportExaminationTable();
      const p3 = exportUsersTable();
      const p4 = exportTracksTable();
      Promise.all([p1, p2, p3, p4])
        .then((val) => resolve(true))
        .catch((err) => reject(err));
    });
  }

  function importUserData() {
    return new Promise((resolve, reject) => {
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

  function replaceDatabaseFile() {
    const simbiPath = path.join(app.getPath("userData"), "simbibot");

    const dbPath = path.join(simbiPath, "simbibot_data.db");
    const localDbPath = __dirname + "/../data.db";

    if (fs.existsSync(localDbPath) && fs.existsSync(dbPath)) {
      fs.unlinkSync(dbPath);
      fs.renameSync(localDbPath, dbPath);
      console.log("database replace done");
    }
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
          const simbiPath = path.join(app.getPath("userData"), "simbibot");
          const dirPath = path.join(simbiPath, "data");

          if (!fs.existsSync(dirPath)) {
            // console.log('no data dir')
            fs.mkdirSync(dirPath);
          }

          const filePath = dirPath + "/users_table.csv";
          const evalStream = fs.createWriteStream(filePath);

          fastcsv
            .write(data, { headers: true })
            .on("finish", () => {
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
          const simbiPath = path.join(app.getPath("userData"), "simbibot");
          const dirPath = path.join(simbiPath, "data");

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

          const simbiPath = path.join(app.getPath("userData"), "simbibot");
          const dirPath = path.join(simbiPath, "data");

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

          const simbiPath = path.join(app.getPath("userData"), "simbibot");
          const dirPath = path.join(simbiPath, "data");

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

  return {
    backUpUserData,
    importUserData,
    replaceDatabaseFile,
  };
};
