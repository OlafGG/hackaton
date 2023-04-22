const { Router } = require('express');
const {getCaso, postCaso} = require('../controllers/caso');

const inicio = Router();

inicio.get('/', getCaso);
inicio.post('/', postCaso);

module.exports = inicio;