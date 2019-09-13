const fs = require('fs');
const http = require('http');
const express = require('express');
const app = express();
const routes = new (require('./router/'))(app);
const config = require('./config');
const util = require('./util');

http.createServer(app).listen(3000, () => {
    console.log('backend running 3000');
})