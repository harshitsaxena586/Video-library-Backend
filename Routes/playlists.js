const bodyParser = require("body-parser");
const express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { Playlist } = require("../models/Playlists.model");
const { User } = require("../models/User.model");

// const PlaylistSchema = new mongoose.Schema({
//   playListName: String,
//   videos: [{ type: Schema.Types.ObjectId, ref: "Video" }],
// });
// const UserSchema = new mongoose.Schema({
//     userName: String,
//     password: String,
//     playlits: [{ type: Schema.Types.ObjectId, ref: "Playlist" }],
//     watchLater: [{ type: Schema.Types.ObjectId, ref: "Video" }],
//   });

router.route("/addtoplaylist/new").post(async (req, res) => {
  const { videoId, playlistName } = req.body;
  const { userId } = req;
  const user = await User.findById(userId);
  console.log(user.playlists, "from db");

  const newPlaylist = new Playlist({ playlistName, videos: [videoId] });
  savedPlaylist = await newPlaylist.save();
  console.log(newPlaylist);
  res.json({ success: true });
});

module.exports = router;
