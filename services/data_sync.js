var { db } = require("../database");
const fastcsv = require("fast-csv");
const fs = require("fs");
const path = require("path");
const got = require("got");
const FormData = require("form-data");

const remoteServer = "https://learn.simbibot.com/api/schools-management/"; // change b4 push


module.exports =  function DataSyncService() {
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


  return {    
    createDataBackup,
    synchronizeData,
    createExaminationBackup,
    createEvaluationBackup,
  };
}
