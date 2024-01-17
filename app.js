const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const musicRouter = require("./route/route");
const connectDB = require("./db/config");

app.use("/", musicRouter);

connectDB();
app.listen(port, () => {
  console.log(`server is the running port on ${port}`);
});
