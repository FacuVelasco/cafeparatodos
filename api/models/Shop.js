const { mongoose } = require('../config/db.js');

const shopSquema = mongoose.Schema({
  name: { type: String, require: true },
  price: { type: Number },
  links: [{ type: String }],
  imgUrl: { type: String },
})

module.exports = mongoose.model('shop', shopSquema);
