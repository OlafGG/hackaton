const { Router } = requiere('express');
const { getTestigo, postTestigo } = requiere('../controllers/testigo.js')

const testigo = Router();

testigo.get('/', getTestigo);
testigo.post('/', postTestigo);

module.exports = testigo;