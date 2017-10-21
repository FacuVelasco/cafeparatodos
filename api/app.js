const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const path = require('path');

const index = require('./routes/index.js');

const app = express();

// static
app.use(express.static(path.join(__dirname, 'public')));

// middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(logger())

// routes
app.use('/', index);

app.listen(80, function(){
  console.log('server listening at 3000')
})