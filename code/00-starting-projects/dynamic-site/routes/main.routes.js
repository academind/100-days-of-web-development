const express = require('express');

const mainController = require('../controllers/main.controller');

const router = express.Router();

router.get('/', mainController.getMainPage)

router.post('/likes', mainController.addLike);

module.exports = router;