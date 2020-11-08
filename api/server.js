const express = require('express');
const app = express();
const errors = require('../network/erros')
// settings

//middlewares
app.use(express.json())
//routes
app.use("/api/user",require("./components/user/network"));
app.use("/api/auth",require("./components/auth/network"));
app.use("/api/post",require("./components/post/network"));
app.use(errors);
module.exports = app;