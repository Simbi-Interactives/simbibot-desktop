
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(__dirname +  '/../data.db');
module.exports = db;