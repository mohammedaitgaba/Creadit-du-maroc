const express = require("express");
const router = express.Router();
const controller = require('../controllers/clients/clientsController')

module.exports = function (app, url) {
    app.use(url, router);
    app.get(`${url}/AllClients`, controller.GetAllClients);
    app.post(`${url}/ClientById`, controller.getClientById);
};