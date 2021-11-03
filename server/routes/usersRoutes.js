const { Router } = require('express');
const { createUser } = require('../controllers/userController');

const users = new Router();

users.post('/', createUser)
