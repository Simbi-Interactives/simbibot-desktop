var sqlite3 = require("sqlite3").verbose();

module.exports = function initializeDb(dbPath) {
  
  var db = new sqlite3.Database(dbPath);
  return db;
};
