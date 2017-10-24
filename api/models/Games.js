const { mongoose } = require('../config/db.js');

const genre = ['FPS', 'MOBA', 'Adventure', 'Survival', 'RPG']

const gameSquema = mongoose.Schema({
  name: { type: String, require: true },
  company: { type: String },
  genre: [{ type: String, enum: genre }],
  played: { type: Boolean, default: false },
  starts: { type: Number, min: 1, max: 5 }
})

module.exports = mongoose.model('games', gameSquema);

