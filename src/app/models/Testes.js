const mongoose = require("mongoose");

const TestesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Testes", TestesSchema);
