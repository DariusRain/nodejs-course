//Darius Rain
//Index (v8.0.0) ~ Handle posts requests.

// Imported the express framework and invoked the value of it to the variable 'index'
const express = require("express"),
  index = express();

//**NEW**:Use two new methods from the express module called '<required-express-variable-name-here>.json()' & '.use()'
//and include it in a middle where in this case to parse JSON data into objects value form.

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

//**NEW**: Handling post requests with using the method '.post()' instead of '.get()'
//NOTES:
//The 'req.body' object is similar to 'req.params' & 'req.query' the differences are that
// All of them come from different sources

// req.query comes from query parameters in the URL such as http://localhost:<port>/api/courses?courseName=course2 where req.query.courseName === "course2".

// req.params comes from routes http://localhost:<port>/api/course/:courseId, so a http 'GET' to that URI you can add any string value /.../api/courses/2'
//then req.params.courseId === "2".

// req.body comes from the body object in an html documetn most likely used for forms.
index.post("/api/courses/", (req, res) => {
  const course = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.send(course)
});

//Set port in enviroment variable from terminal then use the express module method .listen()
const port = process.env.PORT || 3000;
index.listen(port, () => {
  console.log(`Listening on PORT: ${port}...`);
});
