const express = require('express');
const port = process.env.PORT
const app = express();
var router = express.Router()



app.get('/', (req, res) => {
  res.send('hello video backend app !')
});

app.listen(port || 3000, () => {
  console.log('server started');
});