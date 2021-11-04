const { insertingUser } = require('../models/usersModel');

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const result = await insertingUser(name, email, password);
  return res.status(201).json({ message: 'Usuário cadastrado com sucesso' });
};

const createTask = async (req, res) => {

};
module.exports = {
  createUser,
};