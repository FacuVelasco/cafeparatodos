const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost/cafeparatodos', { useMongoClient: true })
.then(() => console.log('mongoDB connected to cafeparatodos'))
.catch(err => console.log('db error: ', err));

module.exports = {mongoose}