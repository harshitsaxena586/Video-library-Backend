const mongoose = require("mongoose");
const {Schema} = mongoose

const PlaylistSchema = new mongoose.Schema({
  userName: String,
  playListName: String,
  videos: [{ type: Schema.Types.ObjectId, ref: "Video" }],
});

const Playlist = new mongoose.model("Playlist", PlaylistSchema);

module.exports = { Playlist };
