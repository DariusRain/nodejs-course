//Darius Rain
//Section 5.7: Debugging



// Imports
const express = require("express"),
  logger = require("./logger"),
  Joi = require("@hapi/joi"),
  config = require("config"),
  helmet = require("helmet"),
  morgan = require("morgan"),
  coursesRoute = require("./routes/courses"),
  index = express();

const debug = require("debug")("app:start");
const debugdb = require("debug")("app:db");

debug(
  `Application: ${config.get("name")} \n Host: ${config.get("mail.host")}`
);
console.log(debug.color)

debugdb(`\n Connected to database \n
DB: ${config.get("db.uri")}`)

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
index.use("/api/courses", coursesRoute)


//Third party middlewares.
index.use(helmet());

//Custom middlewares.
index.use(logger);





//Test Data:


//Root Route:
index.get("/", (req, res) => {
  res.send("Root Route");
});

const port = process.env.PORT || 3000;

index.listen(port, () => {
  console.log(`Listening on PORT: ${port}...`);
});
