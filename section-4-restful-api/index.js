//Darius Rain
//Date: 1/27/20
//NOTE: NEW COMMENTS HAVE *'S AROUND THE STAMENTS (*new comment*)

//Import modules.
const express = require("express"),
  index = express();

//Set routes with express module which is the value of 'index'.
index.get("/", (req, res) => {
  req.send("Hello World");
});

index.get("/api/courses", (req, res) => {
  res.send([1, 2, 3, 4, 5]);
});

index.get("/api/courses/:id", (req, res) => {
  res.send(req.params.id);
});

index.get("/api/posts/:year/:month", (req, res) => {
  res.send(`${req.params.year} ${req.params.month}`);
});

index.get("/api/posts/q-string-params/:year/:month", (req, res) => {
  res.send(req.query);
});

//Set port in enviroment variable from terminal then use the express module method .listen()
const port = process.env.PORT || 3000;
index.listen(port, () => {
  console.log(`Listening on PORT: ${port}...`);
});
