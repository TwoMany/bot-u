const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');

router.post('/user', userController.createUser);
router.get('/user/:id', userController.getOne);
router.get('/user', userController.getAllUsers);
router.delete('/user/:id', userController.deleteUser);


module.exports = router;