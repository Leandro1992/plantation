const fs = require('fs');
const http = require('http');
const express = require('express');
const app = express();
const routes = new (require('./router/'))(app);
const config = require('./config');
const util = require('./util');
const moment = require('moment');
const database = require('./database/database');

global.data = [['x', 'Luminosidade', 'Umidade', 'Temperatura']];

// TODO - THIS PART SHOUD BE SAVED ON DATABASE LATER

global.timeFlow = 30 * 1000 //Milleseconds
global.valve = false // True to open and false to close

//

app.get('/getStatus', (req, res) => {
    console.log(req.query, moment().format("DD-MM-YYYY HH:mm:ss"));
    res.send({
        data: global.data
    })
})

app.get('/getStatusHardware', (req, res) => {
    console.log(req.query);
    global.data.push([moment().format("DD-MM-YYYY HH:mm"), +req.query.luminosidade / 100 , +req.query.umidade, +req.query.temperatura]);
    res.send({
        turn_on_1: 0,
        turn_on_2: 1
    })
})

http.createServer(app).listen(3000, () => {
    console.log('backend running 3000');
})