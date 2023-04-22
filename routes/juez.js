const { Router } = require('express');
const {getJuez, postJuez} = require('../controllers/juez')

const juez = Router();

juez.get('/', getJuez);
juez.post('/', postJuez);

module.exports = juez;