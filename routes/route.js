const express = require('express');

const textController = require('../controllers/textController');

const textRouter = express.Router();

textRouter.post('/', textController.getTexts);

module.exports = textRouter;