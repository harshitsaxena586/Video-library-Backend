const express = require("express");
const port = process.env.PORT;
const app = express();
const cors = require("cors");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const bodyParser = require("body-parser");

const { initializeUserbase } = require("./IntialiseDB/UserbaseDB.js");
initializeUserbase();

app.use(cors());
app.use(bodyParser.json());

const authTokenHandler = async (req, res, next) => {
  const token = req.headers.authorization;
  try {
    let decoded = await jwt.verify(token, process.env.secretKey);
    const { userName, id } = decoded;
    req.userName = userName;
    req.userId = id;
    next();
  } catch (error) {
    res.status(401).json({ message: "Auth token invalid" });
  }
};

const videos = require("./Routes/videos");
app.use("/videos", videos);

app.get("/", (req, res) => {
  res.send("hello  backend app !");
});

const users = require("./Routes/users");
app.use("/users", users);

app.use(authTokenHandler);

app.get("/test", (req, res) => {
  const { userName, userId } = req;
  console.log(userName, userId);
  res.json({ success: true });
});

const watchLater = require("./Routes/watchLater");
app.use("/watchLater", watchLater);


const playlist = require("./Routes/playlists");
app.use("/playlists", playlist);

app.listen(port || 3000, () => {
  console.log("server started");
});
