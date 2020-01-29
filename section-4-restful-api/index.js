//Darius Rain
//Index (v10.0.0) ~ Input validation.

// Imported the express framework and invoked the value of it to the variable 'index'
const express = require("express"),
  index = express();

//Middle-ware
index.use(express.json());

//Set an array of courses
const courses = [
  { id: 1, course: "course1" },
  { id: 2, course: "course2" },
  { id: 3, course: "course3" }
];

//Routes:
index.get("/", (req, res) => {
  res.send("Hello World");
});

index.get("/api/courses", (req, res) => {
  res.send(courses);
});

//Example of route paramaters.
index.get("/api/courses/:id", (req, res) => {
  const course = courses.find(course => course.id === parseInt(req.params.id));

  if (!course) {
    return res
      .status(404)
      .send(`No course with the given id of ${req.params.id}.`);
  }
  return res.send(course);
});

//Example of 'POST' - requests


//**New**: Input validation example.
index.post("/api/courses", (req, res) => {
  //I will need to use an if statement at the begining of this function to filter out any bad requests.
  if(!req.body.name || req.body.name.length < 3) {
  //In this case a fasle value would be undefined if the user entered nothing at all '' = undefined and undefined is a false value same as null and NaN, 0, -1.
  //It is easy to read if or else if statements by noticing the patterns. && = and, || = or, true or false can equal any statement with ===, ==. <=, >=, >, <, !, !=
  //So any statement you see will always evaluate to true or false in the end. A 1 or a 0.
    //Pattern: if(true or false || true or false && true or false && !true or false)
    
  res.status(400).send(`${req.body.name} is a bad request 400!`)
  return;
  //Important to include this return statement becuase the code will keep executing otherwise.
  //return stops a functions execution and returns a value. 
  //By default a function will return undefined if no return statement is included at the end of evaulation.
  //If you use return by itself such as in this case, then it exits the method and does nothing else.
}

const course = {
  id: courses.length + 1,
  name: req.body.name
};
courses.push(course);
res.send(course);
});

//Set port in enviroment variable from terminal then use the express module method .listen()
const port = process.env.PORT || 3000;
index.listen(port, () => {
  console.log(`Listening on PORT: ${port}...`);
});
