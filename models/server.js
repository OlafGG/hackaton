const express = require('express');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        //creacion de las rutas base para los movimientos
        this.paths = {
            acusado: '/hakaton/api/acusado',
            caso: '/hakaton/api/caso',
            evidencia: '/hakaton/api/evidencia',
            sentencia: '/hakaton/api/sentencia',
            testigo: '/hakaton/api/testigo',
        }

        //Conectar a la base de datos
        //this.conectarDB();

        //Rutas de la aplicación
        this.routes();
    }

    // conectarDB(){
    //     db.sync().then(() => console.log('Conectado a la base de datos')).catch(err => console.log(err));
    //     require('./index')
    // }


    routes(){
        //rutas que tomara la api
        this.app.use(this.paths.acusado, require('../routes/acusado'));
        this.app.use(this.paths.caso, require('../routes/caso'));
        this.app.use(this.paths.evidencia, require('../routes/evidencia'));
        this.app.use(this.paths.sentencia, require('../routes/setencia'));
        this.app.use(this.paths.testigo, require('../routes/testigo'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto: ', this.port || 3000);
        })
    }
}

module.exports = Server;