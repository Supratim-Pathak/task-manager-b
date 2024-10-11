const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: String,
  description: String,
});

const User = mongoose.model("task", userSchema);

module.exports = { User };
