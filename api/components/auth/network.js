const { Router } = require('express');
const router = Router();
const { login} = require("./middlewares/index")

router.route('/login').post(login)

module.exports = router