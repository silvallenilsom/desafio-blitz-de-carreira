const { getAuthors } = require('../models/authorsModel');

const getingAuthors = async (_req, res) => {
  const allAuthors = await getAuthors();
  return res.status(200).json(allAuthors);
};

module.exports = {
  getingAuthors,
};