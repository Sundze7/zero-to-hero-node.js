const express = require("express");

const app = express();
app.use(express.json()); // will parse any json from the body of incoming reqs

module.exports = app;
