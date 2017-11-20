const { mongoose } = require('../config/db.js');

const marketSquema = mongoose.Schema({
  name: { type: String, require: true },
  contributor: { type: String, require: true }, // Should be user
  amount: { type: Number },
  type: { type: String, require: true, enum: ['current', 'favorite'] },
})

module.exports = mongoose.model('market', marketSquema);
