const { Router } = require('express');
const { getAllTasks, createTask, updateTask, deleteTask } = require('../controllers/taskController');

const route = new Router();

route.get('/', getAllTasks);
route.post('/', createTask);
route.put('/:id', updateTask);
route.delete('/:id', deleteTask);

module.exports = route;