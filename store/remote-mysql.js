const remote = require('./remote');
const { host, port } = require('../config').mysqlService


module.exports = remote(host, port);