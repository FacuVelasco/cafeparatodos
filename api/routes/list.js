const express = require('express');

const { setResponse, sendResponse, sanitizeInput, validateInput, getModel } = require('../utils/middlewares');

const router = express.Router();

function getList(req, res, next) {
  req.model.find({}).then(list => {
    req.response.content = list;
    next();
  }).catch((err) => {
    req.response.error = err;
    res.send(req.response)
  });
}

function getElem(req, res, next) {
  req.model.findById(req.params.id).then((elem) => {
    req.response.content = elem;
    next();
  }).catch((err) => {
    req.response.error = err;
    res.send(req.response)
  });
}

function addElem(req, res, next) {
  req.model.create(req.body)
  .then(elem => {
    req.response.content = elem;
    req.response.state.code = 201;
    next();
  }).catch((err) => {
    req.response.error = err;
    res.send(req.response)
  });
}

function deleteElem(req, res, next) {
  req.model.remove({_id: req.params.id}).then(() => next())
  .catch((err) => {
    req.response.error = err;
    res.send(req.response)
  });
}

router.use(setResponse);
router.use(getModel);
// everything alrigth
router.get('/', sendResponse);

// get full list
router.get('/:model', getList, sendResponse);

// get specific element
router.get('/:model/:id', getElem, sendResponse);

// add element to list
router.post('/:model', validateInput, sanitizeInput, addElem, sendResponse);

// delete element
router.delete('/:model/:id', sanitizeInput, deleteElem, sendResponse);

module.exports = router;