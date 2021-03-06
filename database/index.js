const initializeDatabase = require("./db");
const app = require("electron").app;
const path = require("path");
const fs = require("fs");

function checkDatabase() {
  let dbPath;
  
  if (process.env.NODE_ENV === "development") {
  
    dbPath = __dirname + "/../data.db";
} else {
  
    const simbiPath = path.join(app.getPath("userData"), "simbibot");

    if (!fs.existsSync(path.join(app.getPath("userData"), "simbibot"))) {
      fs.mkdirSync(path.join(app.getPath("userData"), "simbibot"));
    }

    const localDbPath = __dirname + "/../data.db";
    dbPath = path.join(simbiPath, "simbibot_data.db");

    if (fs.existsSync(localDbPath) && !fs.existsSync(dbPath)) {
      console.log("moving db...");
      fs.renameSync(localDbPath, dbPath);
    }
  }

  return initializeDatabase(dbPath);
}

module.exports.db = checkDatabase();
module.exports.sqlite3 = require("sqlite3").verbose();
