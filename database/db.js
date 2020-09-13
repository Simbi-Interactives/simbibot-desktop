
var sqlite3 = require('sqlite3').verbose();
const app = require('electron').app
const path = require('path');
const fs = require('fs');

module.exports = function initializeDb() {
    
    console.log('initialize db, ',  app.getPath("userData"), __dirname, 'sss')
    const dbPath = path.join(app.getPath("userData"), "simbibot_data.db")
    const localDbPath = __dirname + "/../data.db";

    if(fs.existsSync(localDbPath)) {
        console.log('moving db...')
        fs.renameSync(localDbPath, dbPath)
    }

    
    var db = new sqlite3.Database(dbPath);
    return db;
}
