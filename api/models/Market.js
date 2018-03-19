const { mongoose } = require('../config/db.js');

const marketSquema = mongoose.Schema({
  name: { type: String, require: true },
  contributor: { type: String, require: true }, // Should be user, maybe id?
  observation: { type: String },
  amount: { type: Number, default: 1 },
  type: {
    type: String,
    require: true,
    default: 'current',
    enum: ['current', 'favorite']
  },
})

module.exports = mongoose.model('market', marketSquema);
