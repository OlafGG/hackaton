const {Router} = require('express');
const {getDefend, postDefend} = require('../controllers/defensor');

const defensor = Router();

defensor.get('/', getDefend);
defensor.post('/', postDefend);

module.exports = defensor;