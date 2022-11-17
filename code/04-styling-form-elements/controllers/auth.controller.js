function getSignup(req, res) {
  res.render('customer/auth/signup');
}

function getLogin(req, res) {
  // ...
}

module.exports = {
  getSignup: getSignup,
  getLogin: getLogin
};
