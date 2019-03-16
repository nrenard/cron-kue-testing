const Queue = require("../services/Queue");
// const { Testes } = require("../models");

Queue.process("SearchTestes", async ({ data }, done) => {
  console.log(`Rodou o Queue SearchTestes`);
  return done();
});

module.exports = Queue;
