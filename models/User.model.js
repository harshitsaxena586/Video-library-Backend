const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema({
  userName: String,
  password: String,
  playlists: [{ type: Schema.Types.ObjectId, ref: "Playlist" }],
  watchLater: [{ type: Schema.Types.ObjectId, ref: "Video" }],
});

const User = new mongoose.model("User", UserSchema);

module.exports = { User };
