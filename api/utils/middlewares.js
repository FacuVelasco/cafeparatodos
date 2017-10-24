const response = require('../models/response');

const { findModel } = require('./modelFn');

function setResponse(req, res, next) {
  req.response = Object.assign({}, response);
  next();
}

function sendResponse(req, res) {
  res.status(req.response.state.code || 200).send(req.response);
}

function sanitizeInput(req, res, next) {
  // TODO
  next();
}

function validateInput(req, res, next) {
  // TODO
  next();
}

function getModel(req, res, next) {
  req.model = findModel(req.params.model);
  next()
}

module.exports = { sendResponse, setResponse, sanitizeInput, validateInput, getModel };