const express = require('express');
const router = express.Router();
const blogController = require('../controller/blog.controller');

router.post('/blog', blogController.createBlog);
router.get('/blog/:id', blogController.getBlogByUser);

module.exports = router;