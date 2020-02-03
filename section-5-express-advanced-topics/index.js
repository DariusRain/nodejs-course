//Darius Rain
//Section 5.10: Structuring Express Application.

// Imports
const express = require("express"),
  logger = require("./logger"),
  Joi = require("@hapi/joi"),
  config = require("config"),
  helmet = require("helmet"),
  morgan = require("morgan"),
  //NEW: Added external routes check the file paths below.
  coursesRoute = require("./routes/courses"),
  rootRoute = require('./routes/home'),
  index = express();

  //Debugging 
  const debug = require("debug")("app:start");
  const debugdb = require("debug")("app:db");

  debug(`Application: ${config.get("name")} \n Host: ${config.get("mail.host")}`);
  debugdb(`Connected to database \n DB: ${config.get("db.uri")}`);

  if (index.get("env") === "development") {
  index.use(morgan("tiny"));
  debug("Morgan enabled...");
}

//Middlewares:
//Built-in Express middlewares
index.use(express.json());

index.use(express.urlencoded({ extended: true }));

index.use(express.static("public"));

//NEW: External routes middleware
index.use("/api/courses", coursesRoute);
index.use("/", rootRoute);

//Set Port to listen on
const port = process.env.PORT || 3000;

index.listen(port, () => {
  console.log(`Listening on PORT: ${port}...`);
});
