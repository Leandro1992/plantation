const fs = require('fs');
const http = require('http');
const express = require('express');
const app = express();
const routes = new (require('./router/'))(app);
const config = require('./config');
const util = require('./util');


// TODO - THIS PART SHOUD BE SAVED ON DATABASE LATER

global.timeFlow = 30 * 1000 //Milleseconds
global.valve = false // True to open and false to close

//

http.createServer(app).listen(3001, () => {
    console.log('backend running 3000');
})