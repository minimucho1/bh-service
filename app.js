var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var animeRouter = require('./routes/anime');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json()); // respond with json
app.use(express.urlencoded({ extended: false })); // has to do with body parser
app.use(cookieParser()); // reads cookies for us

app.use('/', indexRouter);
app.use('/users', usersRouter);

// define endpoint '/anime'
app.use('/anime', animeRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

// var express = require("express");
// var bodyParser = require("body-parser");
// var routes = require("./routes/routes.js");
// var app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// routes(app);

// var server = app.listen(3001, function () {
//     console.log("app running on port.", server.address().port);
// });


// module.exports = app;