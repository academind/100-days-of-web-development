const express = require('express');

const router = express.Router();

// No other routes like "login" because this site has only one goal: Stealing money

router.get('/transaction', function (req, res) {
  // No auth check because we don't care about that on this fake site
  res.render('transaction');
});

// No POST /transaction route because this site only has the goal of sending a forged requests
// directly from inside the frontend view

module.exports = router;
