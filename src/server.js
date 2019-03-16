const express = require("express");
const mongoose = require("mongoose");

class Server {
  constructor() {
    this.express = express();

    this.middlewares();
    this.database();
    this.crons();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
  }

  database() {
    // Connect Your DB
  }

  crons() {
    require("./crons");
  }

  routes() {
    this.express.use(require("./routes"));
  }
}

module.exports = new Server().express;
