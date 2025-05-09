const express = require("express");

const app = express();

const friends = [
  { id: 0, name: "Papa Abraham" },
  { id: 1, name: "Jacob Isreal" },
  { id: 2, name: "King David" },
];

// Middleware
app.use((req, res, next) => {
  const startTime = Date.now();
  next();
  const delta = Date.now() - startTime;
  console.log(`${req.method} ${req.url}: this took ${delta}ms`);
});

app.use(express.json()); // express build-in middleware

app.post("/friends", (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({
      error: "Missing friend name",
    });
  }

  const newFriend = {
    name: req.body.name,
    id: friends.length,
  };
  friends.push(newFriend);

  res.json(newFriend);
});

app.get("/friends", (req, res) => {
  res.json(friends);
});
app.get("/friends/:friendId", (req, res) => {
  const friendId = Number(req.params.friendId);
  //const friendId = +req.params.friendId => + converts this string to a number
  const friend = friends[friendId];
  if (friend) {
    res.json(friend);
  } else {
    res.status(404).json({
      error: "Friend doesn't exist",
    });
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`listening on ${PORT}...`);
});
