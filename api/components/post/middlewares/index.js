const controller = require('../index');
const response = require('../../../../network/response');
const middleware = {}

middleware.list = (req, res, next) => {
    controller.list()
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch((error) => {
            response.error(req, res, 'invalid data', 400);
        })
}

middleware.save = (req, res, next) => {
    const data = req.body;
    controller.save(data)
        .then(data => {
            response.success(req, res, data, 201);
        })
        .catch((error) => response.error(req, res, 'invalid data', 400))
}

middleware.update = (req, res, next) => {
    const data = req.body;

    controller.update(data)
        .then((data) => {
            response.success(req, res, data, 201);
        })
        .catch((error) => response.error(req, res, 'invalid data', 400))
}

middleware.deletePost = (req, res, next) => {
    const id = req.body.id;

    controller.deletePost(id)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch((error) => response.error(req, res, 'invalid data', 400))
}

module.exports = middleware