const initializeDatabase = require('./db')

module.exports.db = initializeDatabase()
module.exports.sqlite3 = require('sqlite3').verbose()