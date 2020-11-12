const { Router } = require('express');
const router = Router();
const { list, get, deleteOne, save, follow, query, update } = require('./middlewares/index')
const secure = require('./middlewares/secure')

router.route("/")
    .get(list)
    .put(secure('update'), update)
    .post(save);

router.route("/:id")
    .get(get)
    .delete(deleteOne);

router.route('/follow/:id')
    .get(secure('query'), query)
    .post(secure('follow'), follow)

module.exports = router;
