const express = require("express");
const path = require("path");

const friendsRouter = require("./routes/friends.router");
const messagesRouter = require("./routes/messages.router");
const { title } = require("process");

const app = express();

app.set("view engine", "hbs"); // internally loads hbs
app.set("views", path.join(__dirname, "views")); // finds path to the folders

// Middleware
app.use((req, res, next) => {
  const startTime = Date.now();
  next();
  const delta = Date.now() - startTime;
  console.log(`${req.method} ${req.baseUrl}: this took ${delta}ms`);
});
// app.use(helmet());
// serve static files from /public on /site route
app.use("/site", express.static(path.join(__dirname, "public/"))); // this static middleware is used to serve website content in a given path

// CSP Middleware
// app.use((req, res, next) => {
//   res.setHeader(
//     "Content-Security-Policy",
//     "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:;"
//   );
//   next();
// });

app.use(express.json()); // express build-in middleware

app.get("/", (req, res) => {
  res.render("index", {
    title: "Nature is Beautiful",
    caption: "Let's go Hiking : (=)",
  });
});

app.use("/friends", friendsRouter); // calling the friendsRouter to be used as a middleware
app.use("/messages", messagesRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listening on ${PORT}...`);
});
