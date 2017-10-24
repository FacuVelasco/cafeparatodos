const { mongoose } = require('../config/db.js');

function capitalize(txt) {
  return txt.split(' ').map(str => str[0].toUpperCase() + str.slice(1)).join(' ');
}

const bookSquema = mongoose.Schema({
  title: { type: String, require: true },
  author: { type: String, require: true, set: capitalize },
  genre: { type: String },
  rank: { type: Number }
})

module.exports = mongoose.model('books', bookSquema);
