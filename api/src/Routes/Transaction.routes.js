const express = require("express");
const router = express.Router();
const controller = require('../controllers/account/TransactionController')

module.exports = function (app, url) {
    app.use(url, router);
    app.post(`${url}/NewTransaction`, controller.Transfer);

  };