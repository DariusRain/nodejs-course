//Darius Rain
//Index (v12.0.0) ~ Handling DELETE Requests

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

//**NEW**: Delete route.
//The delete route reminds me of a get request including the find() method but just adding a splice or another method of deletion to it.
index.delete('/api/courses/:id', (req, res) => {
  //I assign a variable named 'id' the value of 'req.params.id' so I dont repeat that entire object.
  //Parse it incase it was a string.
  //Use & assign the value returned by the 'searchArrayFindById()' function. Returns the object if found, otherwise it returns false.

const id = parseInt(req.params.id);
const found = searchArrayFindId(courses, id);

//This conditional depends if the value of the 'found' variable has a false value then it is true due to the logical NOT operator -> '!'. 
if(!found){
  console.log(`DELETE (error:404): ~>Course ID#: ${id} Cannot be found<~`)
return res.status(404).send(`Error 404: Not Found \n Course ID#:${id}`)
}
//Code continues course if the above coditional is false.


//TEST found value
//console.log(courses.indexOf(found))

//Use the indexOf and splice core methods with the courses array then pass it the parameter of the found object.
//The indexOf returns an index number location of that object.
//In this case the splice method takes two parameters 1 starting with a index number (where to start deleting), -//- 2 ending with a index number (where to end deletion).

const deletedCourse = courses.splice(courses.indexOf(found), 1);

//Now log the results to the client and server.
console.log(`DELETE (success:200): ~>Deleted Course ID#: ${id}<~`)
return res.status(200).send(`Deleted course: \n ${deletedCourse}`)
})

const port = process.env.PORT || 3000;
index.listen(port, () => {
  console.log(`Listening on PORT: ${port}...`);
});
