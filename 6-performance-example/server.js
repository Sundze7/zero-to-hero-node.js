const express = require("express");

const app = express();

function delay(duration) {
  const startTime = Date.now();
  while (Date.now() - startTime < duration) {
    //event loop is blocked
  }
}

app.get("/", (req, res) => {
  res.send(`Performance example: ${process.pid}`);
});

app.get("/timer", (req, res) => {
  //Delay the response
  delay(9000);
  res.send(`BEEP BEEP BEEP! ${process.pid}`);
});

console.log("Running server.js ");

// after installing pm2, we don't need this block cuz it manages our worker processes
// if (cluster.isMaster) {
//   console.log("Master has been started...");
//   // creates worker nodes according to the number of physical cores ur laptops has
//   const NUM_WORKERS = os.cpus().length;
//   for (let i = 0; i < NUM_WORKERS; i++) {
//     cluster.fork();
//   }
// } else {
//   console.log("Worker node has been started");
//   app.listen(3000);
// }

console.log("Running Server.js...");
console.log("Worker process started");

app.listen(3001);
