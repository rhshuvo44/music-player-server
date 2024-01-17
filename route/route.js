const express = require("express");
const upload = require("../config/multer");
const audioModel = require("../modal/file");
const mm = require("music-metadata");
const route = express.Router();

route.post("/uploadsong", upload.single("mp3file"), async (req, res) => {
  const { path, originalname, filename } = req.file;
  const metadata = await mm.parseFile(path);
  const { title, artist, picture, album } = metadata.common;

  res.json({
    title: title ? title : filename.lastIndexOf(".mp3"),
    artist: artist ? artist : "Unknown Artist",
    album: album ? album : "Unknown album",
    picture: picture ? picture[0].data.toString("base64") : null,
  });

  const audioSchema = new audioModel({
    audioName: filename,
    audioFileName: originalname,
    audioPath: path,
  });
  await audioSchema.save();
});
module.exports = route;
