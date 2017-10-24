const { mongoose } = require('../config/db.js');

const configSquema = mongoose.Schema({
  topic: { type: String, require: true },
  configuration: { type: String, require: true },
  description: { type: String },
})

module.exports = mongoose.model('todos', configSquema);
