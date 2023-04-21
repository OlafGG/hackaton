const { Router } = require('express');
const {getCaso} = require('../controllers/caso');
//const { getacusadono, getacusadonos, postacusadono, deleteacusadono, patchacusadono} = require('../controllers/acusadonos.controllers');

const inicio = Router();

inicio.get('/', getCaso);

module.exports = inicio;