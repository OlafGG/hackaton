const { Router } = require('express');
const { getEvidencia } = require('../controllers/evidencia')

const evidencia = Router();

evidencia.get('/'), getEvidencia;

module.exports = evidencia;