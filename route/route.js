const express = require("express");
const upload = require("../config/multer");
const audioModel = require("../modal/file");

const route = express.Router();


route.post("/uploadsong", upload.single("mp3file"));
module.exports = route;
