const bodyParser = require("body-parser");
const express = require("express");
var router = express.Router();

const { Video } = require("../models/Video.model");

router
  .route("/")
  .get(async (req, res) => {
    const videos = await Video.find({});
    res.json({ success: true, videos });
  })
  .post((req, res) => {});

module.exports = router;
