const express = require('express');

const app = express();

app.get('/quote', function (req, res, next) {
  res.json({
    quote:
      'As you dive deeper into web development, web development will dive deeper into you!',
  });
});

app.listen(3000);
