const controller = require("../index")
const response = require("../../../../network/response")
const middlewares = {}

middlewares.deleteOne = (req, res) => {
    controller.remove(req.params.id)
        .then(() => {
            response.success(req, res, "user deleted", 200)
        })
        .catch((error) => {
            response.error(req, res, error.message, 400)
        })
}

middlewares.list = (req, res) => {
    controller.list()
        .then((data) => {
            response.success(req, res, data, 200)
        })
        .catch((error) => {
            response.error(req, res, error.message, 400)
        })

}

middlewares.get = (req, res) => {
    controller.get(req.params.id)
        .then((user) => {
            response.success(req, res, user, 200)
        })
        .catch((error) => {
            response.error(req, res, error.message, 400)
        })

}

middlewares.save = (req, res) => {
    const { id, name, password, username } = req.body
    const data = { id, name, password, username }
    controller.save(data)
        .then((data) => {
            response.success(req, res, data, 200)
        })
        .catch((error) => {
            response.error(req, res, error.message, error.status)
        })

}

middlewares.update = (req, res) => {
    const { id, name, password, username } = req.body
    const data = { id, name, password, username }
    controller.update(data)
        .then((data) => {
            response.success(req, res, data, 200)
        })
        .catch((error) => {
            response.error(req, res, error.message, error.status)
        })

}

middlewares.follow = (req, res, next) => {
    controller.follow(req.user.id, req.params.id)
        .then((data) => {
            response.success(req, res, data, 201);
        })
        .catch((error) => {
            next()
        })
}

middlewares.query = (req, res, next) => {
    controller.query(req.params.id)
        .then((data)=>{
            response.success(req,res,data,200);
        })
        .catch((err)=>{
            response.error(req,res,"something went wrong",400)
        })
}
module.exports = middlewares