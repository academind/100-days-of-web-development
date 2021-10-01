const express = require('express');

const productsController = require('../controllers/products.controller');

const router = express.Router();

router.get('/products', productsController.getAllProducts);

module.exports = router;