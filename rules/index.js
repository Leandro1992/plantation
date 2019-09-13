const express   = require('express');
const cors      = require('cors')

class Rules {
    constructor(express) {
        console.log("Iniciando regras de acesso...")
        this.app = express;
        this.startCheck(this.app);
    }

    startCheck(app) {
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
        app.use(cors())
        app.use(express.static('./public'));
    }

    allowCrossDomain (req, res, next) {
        console.log("liberou aqui?")
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,POST,PUT');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    };
}

module.exports = Rules;