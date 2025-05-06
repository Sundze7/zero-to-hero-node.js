const http = require("http");

const PORT = 3000;

// const server = http.createServer((req, res) => {
//   res.writeHead(200, {
//     "content-type": "application/json",
//   });
//   res.end(
//     JSON.stringify({
//       id: 225,
//       name: "Sir Sundze",
//     })
//   );
//   //   res.writeHead(200, {
//   //     "Content-Type": "text/plain",
//   //   });
//   //   res.end("Hello, Greetings from Sundze");
// });

const server = http.createServer();

const friends = [
  { id: 0, name: "Papa Abraham" },
  { id: 1, name: "Jacob Isreal" },
  { id: 2, name: "King David" },
];

server.on("request", (req, res) => {
  const items = req.url.split("/"); // eg /friends => ['', 'friends, '2']
  if (req.method === "POST" && items[1] === "friends") {
    req.on("data", (data) => {
      // data from browser received as a buffer
      const friend = data.toString(); // data coverted to string
      console.log("Request:", friend);
      friends.push(JSON.parse(friend)); // covert string data to object and adding it to our 'friends' Array
    });
    req.pipe(res);
  } else if (req.method === "GET" && items[1] === "friends") {
    // res.writeHead(200, {
    //   "content-type": "application/json",
    // });
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    // res.end(
    //   JSON.stringify({
    //     id: 1,
    //     name: "Engr Sundze",
    //   })
    // );
    if (items.length === 3) {
      const friendIndex = Number(items[2]);
      res.end(JSON.stringify(friends[friendIndex]));
    } else {
      res.end(JSON.stringify(friends));
    }
  } else if (req.method === "GET" && items[1] === "messages") {
    res.setHeader("Content-Type", "text/html");
    // res.write("<html>");
    // res.write("<body>");
    res.write("<ul>");
    res.write("<li>Hello Kenjo</li>");
    res.write("<li>Where is Sundze?</li>");
    res.write("</ul>");
    // res.write("</body>");
    // res.write("</html>");
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`);
});
