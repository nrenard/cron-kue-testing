const { TesteJob } = require("../jobs");

class TesteController {
  teste(req, res) {
    const job = TesteJob.create("SearchTestes", `eu que sei carai`).save();

    job
      .on("complete", () => console.log("SearchTestes is complete"))
      .on("failed attempt", (errorMessage, doneAttempts) =>
        console.log("Job failed")
      )
      .on("failed", errorMessage => console.log("Job failed"))
      .on("progress", (progress, data) =>
        console.log(
          "\r  job #" + job.id + " " + progress + "% complete with data ",
          data
        )
      );

    return res.send(`aeooo`);
  }
}

module.exports = new TesteController();
