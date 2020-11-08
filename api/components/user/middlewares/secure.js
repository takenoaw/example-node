const auth = require('../../../../auth')

const checkAuth = (action) => {
    const middleware = (req, res, next) => {
        switch (action) {
            case 'update':
                const owner = req.body.username
                auth.check.own(req, res, next, owner);
                break;
            case 'follow':
                auth.check.logged(req);
                next()
                break;
            case 'query':
                auth.check.logged(req);
                next()
                break;
            default:
                next()
                break;
        }
    }
    return middleware
}

module.exports = checkAuth