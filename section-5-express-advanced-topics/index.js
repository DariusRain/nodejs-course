//Darius Rain
//Section 5.7: Debugging



// Imports
const express = require("express"),
  logger = require("./logger"),
  Joi = require("@hapi/joi"),
  config = require("config"),
  helmet = require("helmet"),
  morgan = require("morgan"),
  index = express();

//**NEW**:
//Debug log variables:
const debug = require("debug")("app:start");
const debugdb = require("debug")("app:db");

//NEW:
//When enviroment variable DEBUG=app:start everything with debug() will be logged
debug(
  `Application: ${config.get("name")} \n Host: ${config.get("mail.host")}`
);
console.log(debug.color)
//NEW:
//When enviroment variable DEBUG=app:db everything with debugdb() will be logged
debugdb(`\n Connected to database \n
DB: ${config.get("db.uri")}`)

if (index.get("env") === "development") {
  index.use(morgan("tiny"));
  //debug(`Deployment Enviroment: ${index.get("env")}`);
  debug("Morgan enabled...");
}

//Middlewares:
//Built-in Express middlewares
index.use(express.json());

index.use(express.urlencoded({ extended: true }));

index.use(express.static("public"));

//Third party middlewares.
index.use(helmet());

//Custom middlewares.
index.use(logger);

//Test Data:

//Set an array of objects representing courses.
const courses = [
  { id: 1, course: "course1" },
  { id: 2, course: "course2" },
  { id: 3, course: "course3" }
];
let errorCount = 0,
  successCount = 0;

//Routes:

//Get requests.
index.get("/", (req, res) => {
  res.send("Hello World");
});

index.get("/api/courses", (req, res) => {
  res.send(courses);
});

//Route paramaters & '.find()' method.
index.get("/api/courses/:id", (req, res) => {
  const course = courses.find(course => course.id === parseInt(req.params.id));

  if (!course) {
    return res
      .status(404)
      .send(`No course with the given id of ${req.params.id}.`);
  }
  return res.send(course);
});

//Validator function for courses:
function validateCourse(course) {
  //Schema
  const schema = Joi.object({
    course: Joi.string() //All the below methods instruct the validaton behavior for the property called 'name'.
      .min(3)
      .required()
  });
  const result = schema.validate(course);
  return result;
}

//Search array for id function.
function searchArrayFindId(array, id) {
  id = parseInt(id);
  const found = array.find(property => property.id === id);
  if (!Array.isArray(array) && id && found) {
    return false;
  }
  return found;
}

//TEST searchArrayFind():
//console.log(searchArrayFindId(courses, 3));

//Post route using the Joi schema and validator.
index.post("/api/courses", (req, res) => {
  const result = validateCourse(req.body);
  //Return the predefined property '.error' if it has a truthy value
  if (result.error) {
    console.log(`Error (#${++errorCount}): ${result.error.message}`);
    res.status(400).send("Error code (400): " + result.error.message);
    //Function execution stops here and returns false.
    return false;
  } else {
    //Log success to the server if the above conditional is false & the client message below.
    console.log(
      `Suceess (#${++successCount}): Validated name: '${req.body.course}'`
    );
  }

  const course = {
    id: courses.length + 1,
    course: req.body.course
  };

  courses.push(course);

  res.status(200).send(
    `(NEW POST) ID#: ${Object.values(course)
      .toString()
      .replace(",", ", Name: ")}.`
  );
  return true;
});

//Put route for updating.
index.put("/api/courses", (req, res) => {
  let lengthCheck = 3 > req.body.course.length;

  if (lengthCheck) {
    console.log(
      `PUT (error:400): Name length error ~>${req.body.course} < 3<~.`
    );
    res.status(400).send("400: Bad Request.");
    return false;
  }

  const findCourse = searchArrayFindId(courses, req.body.id);
  const validate = validateCourse(req.body.course);

  if (!findCourse && validate) {
    console.log("PUT (error:404): Cannot find course");
    res.status(404).send("Cannot update whats not found... ERR:404");
    return false;
  }

  findCourse.course = req.body.course;

  console.log(
    `PUT (Success: 200): ~> Array: Courses | ID: ${findCourse.id} <~`
  );
  res.status(200).send(`Updated ${findCourse.id}: ${findCourse.course}`);

  return true;
});

index.delete("/api/courses/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const found = searchArrayFindId(courses, id);

  if (!found) {
    console.log(`DELETE (error:404): ~>Course ID#: ${id} Cannot be found<~`);
    return res.status(404).send(`Error 404: Not Found \n Course ID#:${id}`);
  }

  //TEST found value
  //console.log(courses.indexOf(found))

  const deletedCourse = courses.splice(courses.indexOf(found), 1);

  //Now log the results to the client and server.
  console.log(`DELETE (success:200): ~>Deleted Course ID#: ${id}<~`);
  return res.status(200).send(`Deleted course: \n ${deletedCourse}`);
});

const port = process.env.PORT || 3000;
index.listen(port, () => {
  console.log(`Listening on PORT: ${port}...`);
});
