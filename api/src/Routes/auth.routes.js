const express = require("express");
const router = express.Router();
const controller = require('../controllers/auth/authController')

module.exports = function (app, url) {
    console.log(url);
    app.use(url, router);
    app.post(`${url}/signin`, controller.signin);
    app.post(`${url}/signup`, controller.signup);
  };