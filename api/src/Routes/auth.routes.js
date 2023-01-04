const express = require("express");
const router = express.Router();
const controller = require('../controllers/auth/authController')

module.exports = function (app, url) {
    console.log(url);
    app.use(url, router);
    // router.post(`${url}/signup`,controller.signup);
    app.get(`${url}/signin`, controller.signin);
    // router.post(`${url}/verifyisAdmin`, controller.verifyisAdmin);
  };