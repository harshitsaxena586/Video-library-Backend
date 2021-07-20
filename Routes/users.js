const bodyParser = require("body-parser");
const express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { User } = require("../models/User.model");

router
  .route("/login")
  .get(async (req, res) => {
    res.json({ success: true });
  })
  .post(async (req, res) => {
    const { userName, password } = req.body.credentials;
    const user = await User.findOne({ userName: userName });
    if (!user) {
      res.status(404).json({ error: "userName Does not exist" });
    }
    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        { userName, id: user._id },
        process.env.secretKey,
        {
          expiresIn: "10d",
        }
      );
      res.json({ success: true, token, userId: user.id });
    } else {
      res.status(401).json({ error: "invalid password" });
    }
  });

router.route("/signup").post(async (req, res) => {
  const { userName, password } = req.body.credentials;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ userName, password: hashedPassword });
  user.save().then((user) => console.log(user));
  res.json({ success: true });
});

router.route("/addToPlaylist").post((req, res) => {});

router.route("/watchLater").post((req, res) => {});

module.exports = router;
