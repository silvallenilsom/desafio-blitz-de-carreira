const { Router } = require('express');
const { createUser } = require('../controllers/userController');
const { validateUserName, validateUserEmail, validateUserPassword } = require('../middlewares/usersMiddleware');

const users = new Router();

users.post('/', validateUserName, validateUserEmail, validateUserPassword, createUser);

module.exports = users;