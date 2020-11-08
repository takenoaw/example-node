const { Router } = require('express');
const router = Router();
const { list, save, update, deletePost } = require('./middlewares/index');

router.route("/")
    .get(list)
    .post(save)
    .put(update)
    .delete(deletePost);


module.exports = router