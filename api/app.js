const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const path = require('path');

const lists = require('./routes/list.js');

const app = express();

// static
app.use(express.static(path.join(__dirname, 'public')));

// middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(logger('dev'));

// routes
app.use('/', lists);

app.listen(80, function(){
  console.log('server listening at 3000')
})