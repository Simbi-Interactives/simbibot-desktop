var sqlite3 = require("sqlite3").verbose();

module.exports = function initializeDb() {
  const dbPath = __dirname + "/../data.db";

  var db = new sqlite3.Database(dbPath);
  return db;
};
