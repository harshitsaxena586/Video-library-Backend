const mongoose = require("mongoose");

function initializeUserbase() {
  // Connecting to DB
  mongoose
    .connect(process.env.mongocryptdURI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => console.log("Userbase successfully connected"))
    .catch((error) => console.error("Userbase connection failed...", error));
}

module.exports = { initializeUserbase };
