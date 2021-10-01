const Like = require('../models/like.model');

async function getMainPage(req, res, next) {
  let likes;

  try {
    likes = await Like.getLikes();
  } catch (error) {
    return next(error);
  }

  if (likes.length === 0) {
    return res.render('main', { numberOfLikes: 0, lastLikedDate: null });
  }

  const lastLiked = likes[0].date.toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  });

  res.render('main', { numberOfLikes: likes.length, lastLikedDate: lastLiked });
}

async function addLike(req, res, next) {
  const like = new Like();

  try {
    await like.save();
  } catch (error) {
    return next(error);
  }

  res.redirect('/');
}

module.exports = {
  getMainPage: getMainPage,
  addLike: addLike,
};
