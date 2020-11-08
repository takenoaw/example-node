const ctrl = require("../index")
const response = require("../../../../network/response")
const middlewares = {}

middlewares.login = (req, res) => {
    const { username, password } = req.body;
    ctrl.login(username, password)
        .then((token) => {
            response.success(req, res, token, 200);
        })
        .catch((e) => {
            response.error(req, res, e.message, 400);
        })
}
module.exports = middlewares