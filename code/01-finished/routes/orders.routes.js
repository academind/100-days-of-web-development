const express = require('express');

const ordersController = require('../controllers/orders.controller');

const router = express.Router();

router.post('/', ordersController.addOrder); // /orders

router.get('/', ordersController.getOrders); // /orders

router.get('/success', ordersController.getSuccess);

router.get('/failure', ordersController.getFailure);

module.exports = router;