const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const uri = process.env.URI;
const connectDB = async () => {
  try {
    const connect = await mongoose.connect(uri);
    if (connect) {
      console.log(`connected`);
    } else {
      console.log(`not connect`);
    }
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
