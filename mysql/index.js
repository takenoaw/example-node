require("dotenv").config()
const express = require('express');
const { port } = require('../config').mysqlService

const app = express();

app.use(express.json());

app.use('/',require('./network')) 

app.listen(port, () => {
    console.log('Service mysql listen', port);
});