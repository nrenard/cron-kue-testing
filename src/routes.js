const routes = require("express").Router();

const { TesteController } = require("./app/controllers");

routes.get("/", TesteController.teste);

module.exports = routes;
