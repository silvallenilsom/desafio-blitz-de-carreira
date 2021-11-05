const { ObjectId } = require('mongodb');
const { connection } = require('./mongodbConnection');

const gettingAllTasks = async () => {
  const db = await connection();
  const result = db.collection('tasks').find().toArray();
  return result;
};

const creatingTask = async (title, describe, status, initialDate) => {
  const db = await connection();
  const result = db.collection('tasks')
    .insertOne({ title, describe, status, initialDate: new Date()});
  return { _id: result.insertedId, title, describe, status, initialDate};
};

const updatingTask = async (id, status) => {
  const db = await connection();
  await db.collection('tasks').updateOne({ _id: ObjectId(id) }, { $set: { status } });
  return { _id: id, status };
};

const deletingTask = async (id) => {
  const db = await connection();
  await db.collection('tasks').deleteOne({ _id: ObjectId(id) });
};
module.exports = {
  gettingAllTasks,
  creatingTask,
  updatingTask,
  deletingTask,
};