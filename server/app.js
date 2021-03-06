var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var registerRouter = require("./routes/register");
var loginRouter = require("./routes/login");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const { sequelize } = require("./models");
const db = require("./models");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/register", registerRouter);
app.use("/login", loginRouter);

const clientsRouter = require("./routes/clients");
app.use("/clients", clientsRouter);

const caseRouter = require("./routes/case");
app.use("/case", caseRouter);

const familyRouter = require("./routes/family");
app.use("/family", familyRouter);

const contactRouter = require("./routes/contact");
app.use("/contact", contactRouter);

//setup db connection
sequelize.sync().then(() => {});

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
