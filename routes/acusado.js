const { Router } = require('express');
//const { getacusadono, getacusadonos, postacusadono, deleteacusadono, patchacusadono} = require('../controllers/acusadonos.controllers');

const acusado = Router();

acusado.get('/', getacusadono);
acusado.post('/', postacusadono);

module.exports = acusado;