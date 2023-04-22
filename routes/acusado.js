const { Router } = require('express');
const {getAcusado, postAcusado} = require('../controllers/acusado')

const acusado = Router();

acusado.get('/', getAcusado);
acusado.post('/', postAcusado);

module.exports = acusado;