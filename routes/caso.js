const { Router } = require('express');
const { postCaso } = require('../controllers/caso');

const inicio = Router();

// inicio.get('/', getCaso);
inicio.post('/', postCaso);

module.exports = inicio;