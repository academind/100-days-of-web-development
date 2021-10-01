async function updateCartPrices(req, res, next) {
  const cart = res.locals.cart;

  await cart.updatePrices();

  // req.session.cart = cart;
  next();
}

module.exports = updateCartPrices;