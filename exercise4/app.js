var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var purchaseRouter = require('./routes/purchase');
var userRouter = require('./routes/user');
var productsRouter = require('./routes/shopProducts');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/purchase', purchaseRouter);
app.use('/user', userRouter);
app.use('/products', productsRouter);

module.exports = app;
