const express = require('express');

const blogController = require('../controllers/post-controller');
const guardRoute = require('../middlewares/auth-protection-middleware');

const router = express.Router();

router.get('/', blogController.getHome);

router.use(guardRoute);

router.get('/admin', blogController.getAdmin);

router.post('/posts', blogController.createPost);

router.get('/posts/:id/edit', blogController.getSinglePost);

router.post('/posts/:id/edit', blogController.updatePost);

router.post('/posts/:id/delete', blogController.deletePost);

module.exports = router;
