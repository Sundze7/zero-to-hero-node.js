const path = require("path");

function getMessages(req, res) {
  //   res.send("<ul><li>Hello Sundze!!!</li></ul>");
  //   path.join(__dirname, "..", "public", "moi.jpg");
  res.sendFile(path.join(__dirname, "..", "public", "images", "moi.jpg"));
}

function postMessage(req, res) {
  console.log("Updating messages...");
}

module.exports = {
  getMessages,
  postMessage,
};
