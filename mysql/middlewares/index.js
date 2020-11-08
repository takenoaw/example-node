const store = require('../../store/mysql')
const { error, success } = require('../../network/response')
const middleware = {}

middleware.list = (req, res, next) => {
    const table = req.params.table;
    store.list(table).then((data) => {
        success(req, res, data, 200)
    })
        .catch((e) => {
            error(req, res, 'something went wrong', 400)
        })
}

middleware.get = (req, res, next) => {
    const { table, id } = req.params
    store.get(table, id).then((data) => {
        success(req, res, data, 200)
    })
        .catch((e) => {
            error(req, res, 'something went wrong', 400)
        })
}

middleware.deleteOne = (req, res, next) => {
    const { table, id } = req.params
    store.get(table, id).then((data) => {
        success(req, res, data, 200)
    })
        .catch((e) => {
            error(req, res, 'something went wrong', 400)
        });
}
middleware.save = (req, res, next) => {
    const data = req.body;
    const { table } = req.params
    store.insert(table, data).then((data) => {
        success(req, res, data, 200)
    })
        .catch((e) => {
            error(req, res, 'something went wrong', 400)
        });
}
middleware.update = (req, res, next) => {
    const data = req.body;
    const { table } = req.params
    store.update(table, data).then((data) => {
        success(req, res, data, 200)
    })
        .catch((e) => {
            error(req, res, 'something went wrong', 400)
        });
}

module.exports = middleware