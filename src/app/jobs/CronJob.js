const Queue = require("../services/Queue");

Queue.process("Cron", async ({ _attempts: attempts }, done) => {
  if (attempts > 2) return done();
  return done(new Error("Oooops!"));
});

module.exports = Queue;
