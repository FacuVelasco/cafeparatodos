const { mongoose } = require('../config/db.js');

const toDoSquema = mongoose.Schema({
  task: { type: String, require: true },
  done: { type: Boolean, default: false },
  priority: { type: Number }
})

module.exports = mongoose.model('todos', toDoSquema);
