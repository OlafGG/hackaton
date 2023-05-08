require('dotenv').config();

const Server = require('./models/server');
// Esto es un comentario

//llamada al archivo de models server para empezar el proyecto
const server = new Server();

server.listen();