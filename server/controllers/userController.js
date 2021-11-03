const { insertUser } = require('../models/usersModel');

const createUser = async (req, res) => {
  const { name, email, password} = req.body;
  const result = await insertUser(name, email, password);
  return res.status(200).json({message: 'Usuário cadastrado com sucesso'});
};

module.exports = {
  createUser,
};