const bodyParser = require("body-parser");
const express = require("express");
var router = express.Router();

const { User } = require("../models/User.model");

router
  .route("/")
  .get(async (req, res) => {
    const { userId } = req;
    const user = await User.findById(userId).populate("watchLater");
    const { watchLater } = user;
    res.json({ watchLater });
  })
  .post(async (req, res) => {
    const { videoId } = req.body;
    console.log(videoId);
    const { userId } = req;
    const user = await User.findById(userId);

    user.watchLater.push(videoId);
    await user.save();
    res.json({ success: true });
  });

module.exports = router;
