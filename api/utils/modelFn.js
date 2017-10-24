const ToDo = require('../models/ToDo');
const Books = require('../models/Books');
const Games = require('../models/Games');

function findModel(model) {
  switch(model) {
    case 'books':
      return Books;
    case 'todos':
      return ToDo;
    case 'games':
      return Games;
  }
}
module.exports = { findModel };