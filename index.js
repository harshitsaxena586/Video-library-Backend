const express = require('express');
const port = process.env.PORT
const app = express();
var router = express.Router()
var cors = require('cors')

const { initializeUserbase } = require('./IntialiseDB/UserbaseDB.js');
initializeUserbase()

app.use(cors())

const videos = require("./Routes/videos")
app.use("/videos", videos)

app.get('/', (req, res) => {
  res.send('hello  backend app !')
});

app.listen(port || 3000, () => {
  console.log('server started');
});