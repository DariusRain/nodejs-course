//Darius Rain
//Index (v10.0.0) ~ Joi input validation.

// Imported the express framework and invoked the value of it to the variable 'index'
const express = require("express"),
  index = express(),
  //**NEW**: Capitalized the 'J' in 'Joi' becuase the value of the dependency is a class.
  //NOTE: Its a common practice to capitalize vairables with a value of a class.
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

//Input validation & post request.
//**NEW**: Using Joi to validate a post request.
  //IMPORTANT: Changes in syntax!.
  //The Joi package has been transfered to a new owner and he made changes to the syntax.
  //So in order to validate a schema the sytnax is '<schemaVariableName>.validate(<variableToValidate>)'
  //Opposed to using the outdated way: Joi.validate(<variableToValidate>, <schemaVariableName>)

index.post("/api/courses", (req, res) => {
  
  const schema = Joi.object({
    name: Joi.string() //All the below methods instruct the validaton behavior for the property called 'name'.
      .min(3)
      .required()
  });
//So the reason for a schema is to set standard values for your data structures.
//The reason behind the Joi framework's use in creating a schema is that it has pre-defined methods that save you alot of time, -
//- for example the methods in the above schema (.string(), .required(), .min()).
// You can chain the methods together based on whatever standard you set on that specific property's value.

//This 'schema.validate(req.body)' method returns an object with two properties (value & error). 
//Depending on the value of 'req.body' the propeties 'value' and 'error' depend on.
//So if req.body does not meet the standards your schema then 'error' will have a value other wise 'value' will have a value   
const result = schema.validate(req.body);

//If the 'error' propetry like I was describing above has a value then log the error in server console, send status 400 w/ err msg to client and return false. 
//(Return stops the function from executing further and returns a set value)
//Otherwise the function will proceed and log the sucecss in server console then push the new object to array and finally send the data to client with a status 200. 
  if (result.error) {
    console.log(`Error (#${++errorCount}): ${result.error.message}`);
    res.status(400).send("Error code (400): " + result.error.message);
    return false;
  } else {
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

//Set port in enviroment variable from terminal (exports <enviroment-variable-name>=<port-number> If on Windows CMD then use command 'set' instead of exports.')
//then use the express module method .listen()
const port = process.env.PORT || 3000;
index.listen(port, () => {
  console.log(`Listening on PORT: ${port}...`);
});
