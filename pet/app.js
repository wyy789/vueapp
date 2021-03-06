var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var shopRouter = require('./routes/shop');
var commodityRouter = require('./routes/commodity');
var loginRouter = require('./routes/login');
var memberRouter = require('./routes/member');
var serivceRouter = require('./routes/serivce');
var theorderRouter = require('./routes/theorder');
<<<<<<< HEAD
var storelistRouter = require('./routes/storelist');

=======
>>>>>>> 74379e0b743047a92c4cb952dc6d762735703891


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/shop', shopRouter);
app.use('/commodity', commodityRouter);
app.use('/login', loginRouter);
app.use('/member', memberRouter);
app.use('/serivce', serivceRouter);
app.use('/theorder', theorderRouter);
<<<<<<< HEAD
app.use('/storelist', storelistRouter);

=======
>>>>>>> 74379e0b743047a92c4cb952dc6d762735703891


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
