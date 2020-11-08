const response = require('./response')

const error = (err, req, res, next)=>{
    const message = err.message || "internal error"
    const status = err.statusCode || 400

    response.error(req, res, message, status)
}


module.exports = error;