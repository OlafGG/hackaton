const { Router } = require('express');
const { getSentencia } = require('../controllers/sentencia')

const sentencia = Router();

sentencia.get('/', getSentencia);

module.exports = sentencia;