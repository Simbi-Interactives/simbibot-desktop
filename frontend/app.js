const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors =  require('cors');
const path = require('path');
const morgan = require("morgan");

global.__basedir = __dirname;


app.use(cors);
app.use(bodyparser.json());
app.use(morgan("tiny"));


// app.use(express.static("./www"));


app.get("/*", (req, res, next) => {
    console.log('res')
    res.send("dhsjkjsks")
    // res.sendFile("./www/index.html");
});


const router = express.Router();

router.get('/', (req, res) => {
    return res.send('/vkdnfvn')
})

module.exports = app;
