const express = require('express');
const port = process.env.PORT
const app = express();
var router = express.Router()


const { initializeUserbase } = require('./IntialiseDB/UserbaseDB.js');
initializeUserbase()

const cart = require("./Routes/cart.js");
app.use("/cart", cart)


const users = require("./Routes/users.js")
app.use("/users", users)

app.get('/', (req, res) => {
  res.send('hello video backend app !')
});

app.listen(port || 3000, () => {
  console.log('server started');
});