const express = require("express");
const cors = require("cors");
const path = require("path");

const planetsRouter = require("./routes/planets/planets.router.js");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3002",
  })
);

app.use(express.json()); // will parse any json from the body of incoming reqs
app.use(express.static(path.join(__dirname, "..", "public")));

app.use(planetsRouter);
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
