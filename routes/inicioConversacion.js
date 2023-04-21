const { Router } = require('express');
const {getConversacion} = require('../controllers/inicioConversacion');
//const { getacusadono, getacusadonos, postacusadono, deleteacusadono, patchacusadono} = require('../controllers/acusadonos.controllers');

const inicio = Router();

inicio.get('/', getConversacion);

module.exports = inicio;