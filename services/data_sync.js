var db = require("../database/db");
const fastcsv = require("fast-csv");
const fs = require("fs");
// const path = require("path");
const got = require("got");
const FormData = require("form-data");

function DataSyncService() {
  function createDataBackup() {
    return new Promise((resolve, reject) => {
      const p1 = createEvaluationBackup();
      const p2 = createExaminationBackup();
      Promise.all([p1, p2])
        .then(val => resolve(val))
        .catch(err => reject(err))
    });
  }

  function createEvaluationBackup() {
    return new Promise((resolve, reject) => {
      db.serialize(() => {
        db.all(
          `SELECT * FROM Evaluations WHERE status = 'completed' AND  datetime(completed_at ) Not NULL ORDER by datetime(completed_at)`,
          [],
          (err, data) => {
            if (err) {
              console.log(err);
              throw Error("Error reading evaluation data from database");
            }

            if (data.length === 0) return resolve(true);

            if (!fs.existsSync(process.cwd() + "/data_sync")) {
              fs.mkdirSync(process.cwd() + "/data_sync");
            }

            const filePath = process.cwd() + "/data_sync/evaluations.csv";
            const evalStream = fs.createWriteStream(filePath);

            fastcsv
              .write(data, { headers: true })
              .on("finish", async () => {
                resolve({path: filePath});
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
          `SELECT * FROM ExamAttempts WHERE completed_at is NOT NULL ORDER by datetime(completed_at)`,
          [],
          (err, data) => {
            if (err) {
              console.log(err);
              throw Error("Error reading evaluation data from database");
            }

            if (data.length === 0) return resolve(true);


            if (!fs.existsSync(process.cwd() + "/data_sync")) {
              fs.mkdirSync(process.cwd() + "/data_sync");
            }

            const filePath = process.cwd() + "/data_sync/examattempts.csv";
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

  /*
  function synchronizeEvaluations() {
    return new Promise(async (resolve, reject) => {    
      const filePath = process.cwd() + "/data_sync/evaluations.csv";

        if(!fs.existsSync(filePath)) {        
            return reject({
              success: false,
              message: "No backup file found for evaluations",
            });
        }

        const formdata = new FormData();

        let stream = fs.createReadStream(
          filePath
        );

        formdata.append("result_file", stream, {
          knownLength: fs.statSync(
            filePath
          ).size,
        });

        // console.log('stream ', stream)
        formdata.append("type", "evaluation");

        try {
          const res = await got(
            "https://playground.simbibot.com/api/schools-management/17/upload-result",
            {
              method: "POST",
              body: formdata,
              headers: {
                Accept: "application/json",
                ...formdata.getHeaders(),
              },
            }
          );
          console.log("evaluation csv uploaded  ", res.body);

          resolve(res.body);
        } catch (e) {
          console.log("upload error ", e);
          reject(e);
        }                    
      });
    }

  function synchronizeExamAttempts() {
    return new Promise(async (resolve, reject) => {
      const filePath = process.cwd() + "/data_sync/examattempts.csv";

        if (!fs.existsSync(filePath)) {
          return reject({ success: false, message: "No backup file found for examinations" });
        }

      const formdata = new FormData();

      let stream = fs.createReadStream(
        filePath
      );

      formdata.append("result_file", stream, {
        knownLength: fs.statSync(
          filePath
        ).size,
      });

      formdata.append("type", "exam");

      try {
        const res = await got(
          "https://playground.simbibot.com/api/schools-management/17/upload-result",
          {
            method: "POST",
            body: formdata,
            headers: {
              Accept: "application/json",
              ...formdata.getHeaders(),
            },
          }
        );
        console.log("exam csv uploaded  ", res.body);

        resolve(res.body);
      } catch (e) {
        console.log(
          "exam upload error ",
          e.response.body,
          e.response.status
        );
        reject(e.response.body);
      }
               
    });
  }
*/
  
function synchronizeData({type, fileName, id}) {
    return new Promise(async (resolve, reject) => {
      const filePath = `${process.cwd()}/data_sync/${fileName}`;

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
        const res = await got(
          `https://playground.simbibot.com/api/schools-management/${id}/upload-result`,
          {
            method: "POST",
            body: formdata,
            headers: {
              Accept: "application/json",
              ...formdata.getHeaders(),
            },
          }
        );
        console.log(`${type}  csv uploaded`, res.body);

        resolve(res.body);
      } catch (e) {
        console.log(`${type} upload error `, e.response.body, e.response.status);
        reject(e.response.body);
      }
    });
  }

  return {
    createDataBackup,
    synchronizeData,
    createExaminationBackup,
    createEvaluationBackup
  };
}

module.exports = DataSyncService;
