const { connection } = require('./mongodbConnection');

const gettingAllTasks = async () => {
  const db = await connection();
  const result = db.collection('tasks').find().toArray();
  return result;
};

const creatingTask = async (title, describe, status, initialDate) => {
  const db = await connection();
  const result = db.collection('tasks')
    .insertOne({ title, describe, status, initialDate });
  return { _id: result.insertedId, describe, status, initialDate };
};

module.exports = {
  gettingAllTasks,
  creatingTask,
};