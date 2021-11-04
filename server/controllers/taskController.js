const { gettingAllTasks, creatingTask } = require('../models/taskModel');

const getAllTasks = async (_req, res) => {
  const result = await gettingAllTasks();
  return res.status(200).json(result);
};

const createTask = async (req, res) => {
  const { title, describe, status, initialDate } = req.body;
  const result = await creatingTask(title, describe, status, initialDate);
  return res.status(201).json(result);
};

module.exports = {
  getAllTasks,
  createTask,
};