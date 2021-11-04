const { Router } = require('express');
const { getAllTasks, createTask } = require('../controllers/taskController');

const route = new Router();

route.get('/', getAllTasks);
route.post('/', createTask);

module.exports = route;