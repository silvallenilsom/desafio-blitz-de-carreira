const { connection } = require('./mongodbConnection');

const getAuthors = async () => {
  const db = await connection();
  const result = await db.collection('authors').find().toArray();
  return result;
}

module.exports = {
  getAuthors,
};
