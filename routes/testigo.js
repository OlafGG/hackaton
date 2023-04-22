const { Router } = require('express');
const { getTestigo, postTestigo } = require('../controllers/testigo.js');

const testigo = Router();

testigo.get('/', getTestigo);
testigo.post('/', postTestigo);

module.exports = testigo;