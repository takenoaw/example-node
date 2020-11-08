const { secret } = require('../config').jwt;
const { json } = require('express');
const jwt = require('jsonwebtoken');
const error = require('../utils/error')

const sign = (data) => {
    return jwt.sign(data, secret)
}

const verify = (token) => {
    return jwt.verify(token, secret)
}

const check = {
    own: (req, res, next, owner) => {
        const decoded = decodeHeader(req)
        //auth
        if (decoded.data !== owner) {
            throw error('invalid data', 400)
        } else {
            next()
        }
    },
    logged:(req,next)=>{
        const decoded = decodeHeader(req)
    },
}
const getToken = (auth) => {
    if (!auth) {
        throw error("there's no auth", 403)
    }
    if (auth.indexOf('Bearer ') === -1) {
        throw error("invalid", 400)
    }

    let token = auth.replace('Bearer ', '');
    return token
}

const decodeHeader = (req) => {
    let decoded = ""
    const authorization = req.headers.authorization || '';
    const token = getToken(authorization);
    decoded = verify(token)
    req.user = decoded;
    return decoded
}

module.exports = { sign, check }