const path = require('path');

const express = require('express');

const db = require('./data/database');
const discussionRoutes = require('./routes/discussion');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.use(discussionRoutes);

app.use(function(error, req, res, next) {
  console.log(error);
  res.render('500');
})

db.connectToDatabase().then(function () {
  app.listen(3000);
});
