const ToDo = require('../models/ToDo');
const Books = require('../models/Books');
const Games = require('../models/Games');
const Market = require('../models/Market');

function findModel(model) {
  switch(model) {
    case 'books':
      return Books;
    case 'todos':
      return ToDo;
    case 'games':
      return Games;
    case 'market':
      return Market;
  }
}
module.exports = { findModel };