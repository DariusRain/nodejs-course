//Darius Rain
//Index (v11.0.0) ~ Handling Put Requests

// Imported the express framework and invoked the value of it to the variable 'index'
const express = require("express"),
  index = express(),
  Joi = require("@hapi/joi");

//Middleware (Will explain later on.)
index.use(express.json());

//Set an array of courses
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

//**NEW**: Created function that validates courses to save code (Make these type of things a habit. Will help!).
function validateCourse(course) {
  //The 'course' parameter will 99% of the time and should have the value of 'req.body'.

  //Schema
  const schema = Joi.object({
    course: Joi.string() //All the below methods instruct the validaton behavior for the property called 'name'.
      .min(3)
      .required()
  });
  //Validator function for courses.
  const result = schema.validate(course);
  return result;
}

//**EXTRA**: Create a function that finds by course id.

function searchArrayFindId(array, id) {
  id = parseInt(id);
  const found = array.find(property => property.id === id);
  if (!Array.isArray(array) && id && found) {
    //res.status(404).send("Error 404: (Not Found)");
    return false;
  }
  return found;
}
//TEST searchArrayFind():
console.log(searchArrayFindId(courses, 3));

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
      `Suceess (#${++successCount}): Validated name: '${req.body.name}'`
    );
  }

  const course = {
    id: courses.length + 1,
    name: req.body.name
  };

  courses.push(course);

  res.status(200).send(
    `(NEW POST) ID#: ${Object.values(course)
      .toString()
      .replace(",", ", Name: ")}.`
  );
  //Function execution stops here and returns true. (Like to do this to return the succesds of a fucntion execution in case I need this value for something).
  //This can always be removed, functions return a value of undefined by default.
  return true;
});

//**NEW**: Put request similar to the post request structure but combining the get request.
index.put("/api/courses", (req, res) => {
  //Had trouble with the length checking using joi schema just added my own logic.
  let lengthCheck = 3 > req.body.course.length;

  if (lengthCheck) {
    console.log(
      `PUT (error:400): Name length error ~>${req.body.course} < 3<~.`
    );
    res.status(400).send("400: Bad Request.");
    return false;
  }
  //Assign the following the value each a scustom function which returns the values I need.
  //For less code and can be universal else where in the coding enviroment.
  const findCourse = searchArrayFindId(courses, req.body.id);
  const validate = validateCourse(req.body.course);

  //If the above variables return a falsey value then execute the following code block.
  if (!findCourse && validate) {
    console.log("PUT (error:404): Cannot find course");
    res.status(404).send("Cannot update whats not found... ERR:404");
    return false;
  }
  //If function continues then that means it is true according to the above logic.
  //So in this case i will be re-assigning a value to the course property
  //the value comes from what was returned from the 'searchArrayFindId()' function -
  //Which is assign to the variable 'findCourse'
  findCourse.course = req.body.course;
  //Then return the result the client and the server console.
  console.log(
    `PUT (Success: 200): ~> Array: Courses | ID: ${findCourse.id} <~`
  );
  res.status(200).send(`Updated ${findCourse.id}: ${findCourse.course}`);

  return true;
});
//Set port in enviroment variable from terminal (exports <enviroment-variable-name>=<port-number> If on Windows CMD then use command 'set' instead of exports.')
//then use the express module method .listen()

const port = process.env.PORT || 3000;
index.listen(port, () => {
  console.log(`Listening on PORT: ${port}...`);
});
