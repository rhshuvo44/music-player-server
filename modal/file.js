const mongoose = require("mongoose");

const audioSchema = new mongoose.Schema({
  audioName: String,
  audioFileName: String,
  audioPath: String,
});


module.exports = mongoose.model("audioModel", audioSchema);
