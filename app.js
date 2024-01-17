const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const post = process.env.PORT;

app.listen(port, () => {
  console.log(`server is the running port on ${port}`);
});
