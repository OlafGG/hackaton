const { Router } = require('express');
const {getCaso} = require('../controllers/caso');

const inicio = Router();

inicio.get('/', getCaso);

module.exports = inicio;