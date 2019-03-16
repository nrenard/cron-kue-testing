const cron = require("node-cron");
const { CronJob } = require("../app/jobs");

// cron.schedule(
//   "(minuto) (hora) (dia do mes) (mes) (dia da semana)",
//   async () => {}
// );

cron.schedule("* * * * *", async () => {
  const job = CronJob.create("Cron")
    .attempts(5)
    .save();

  console.log("!----------------!");
  job
    .on("complete", () => console.log("complete job Cron acada minuto"))
    .on("failed attempt", (errorMessage, doneAttempts) =>
      console.log(
        "failed attempt: errorMessage: ",
        errorMessage,
        " doneAttempts: ",
        doneAttempts
      )
    )
    .on("failed", errorMessage =>
      console.log("failed, errorMessage: ", errorMessage)
    );
});

cron.schedule("48 * * * *", async () => {
  console.log("!----------------!");
  console.log("Toda a hora no minuto 48");
});

cron.schedule("* 14 * * *", async () => {
  console.log("!----------------!");
  console.log("Todos os minutos as 14 horas.");
});

cron.schedule("0 15 * * *", async () => {
  console.log("!----------------!");
  console.log("As 15 horas.");
});
