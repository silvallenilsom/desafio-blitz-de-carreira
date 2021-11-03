const { Router } = require('express');
const { getingAuthors } = require('../controllers/authorsControl');

const authorRoutes = new Router();

authorRoutes.get('/', getingAuthors);

module.exports = authorRoutes;

