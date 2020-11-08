require("dotenv").config()
const app = require('./server');
const config = require('../config');

app.listen(config.api.port, ()=>{
    console.log('server running on port', config.api.port)
})

