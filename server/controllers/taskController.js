const { gettingAllTasks, creatingTask, deletingTask, updatingTask } = require('../models/taskModel');

const getAllTasks = async (_req, res) => {
  const result = await gettingAllTasks();
  return res.status(200).json(result);
};

const createTask = async (req, res) => {
  const { title, describe, status, initialDate } = req.body;
  const result = await creatingTask(title, describe, status, initialDate);
  return res.status(201).json(result);
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const up = await updatingTask(id, status);
  return res.status(200).json({ up,message: 'Task atualizada' });
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  await deletingTask(id);
  return res.status(200).json({ message: 'task deletada com sucesso' });
};

module.exports = {
  getAllTasks,
  createTask,
  deleteTask,
  updateTask,
};