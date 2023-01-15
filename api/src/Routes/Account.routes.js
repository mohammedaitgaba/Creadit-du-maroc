const express = require("express");
const router = express.Router();
const controller = require('../controllers/account/AccountController')

module.exports = function (app, url) {
    app.use(url, router);
    app.post(`${url}/createAcc`, controller.CreateAcc);
    app.post(`${url}/signToAcc`, controller.SignToAcc);
    app.post(`${url}/retait`, controller.PullMoney);
    app.get(`${url}/AllAccounts`, controller.GetAllAccounts);
  };