const { connection } = require('./mongodbConnection');

const insertUser = async (name, email, password) => {
  const user = {name, email, password};
  const db = await connection();
  const result = db.collection('users').insertOne(user);
  return user;
};

module.exports = {
  insertUser,
};
