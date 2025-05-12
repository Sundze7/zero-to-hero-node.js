const express = require("express");

const friendsController = require("./controllers/friends.controller");
const messagesController = require("./controllers/messages.controller");

const app = express();

// Middleware
app.use((req, res, next) => {
  const startTime = Date.now();
  next();
  const delta = Date.now() - startTime;
  console.log(`${req.method} ${req.url}: this took ${delta}ms`);
});

app.use(express.json()); // express build-in middleware

app.post("/friends", friendsController.postFriend);
app.get("/friends", friendsController.getAllFriends);
app.get("/friends/:friendId", friendsController.getFriend);

app.get("/messages", messagesController.getMessages);
app.post("/messages", messagesController.postMessage);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`listening on ${PORT}...`);
});
