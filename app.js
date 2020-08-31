var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
const cron = require("node-cron");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const DataSyncService = require("./services/data_sync");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/app", indexRouter);

app.use(express.static(path.join(__dirname, "/www")));

app.use("/*", (req, res, next) => {
  return res.sendFile(path.join(__dirname, "/www/index.html"));
});

const dataService = DataSyncService();
dataService
  .createDataBackup()
  .then((val) => {
    console.log("backup successfully created ", val);
  })
  .catch((e) => console.log("error creating csv backup"));

cron.schedule("0 */1 * * 1-5", function () {
  console.log("---------------------");
  console.log("Running Cron Job");
  const dataService = DataSyncService();
  dataService
    .createDataBackup()
    .then((val) => {
      console.log("backup successfully created ", val);
    })
    .catch((e) => console.log("error creating csv backup"));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
