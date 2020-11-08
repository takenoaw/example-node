const { Router } = require('express');
const router = Router();
const { list, get, deleteOne, save, update} = require('./middlewares/index')

router.route('/:table')
    .post(save)
    .put(update)
    .delete(deleteOne)
    .get(list);

router.route('/:table/:id')
    .get(get);

module.exports = router