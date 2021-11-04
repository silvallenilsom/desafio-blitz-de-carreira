const { connection } = require('./mongodbConnection');

const insertingUser = async (name, email, password) => {
  const user = { name, email, password };
  const db = await connection();
  const result = db.collection('users').insertOne(user);
  return { _id: result.insertedId, name, email, password };
};

const insertingTask = async (description, initialDate, status) => {
  const task = { description, initialDate, status };
};

module.exports = {
  insertingUser,
};
