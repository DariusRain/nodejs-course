//Darius Rain
//Index (v7.0.0)

// Imported the express framework and invoked the value of it to the variable 'index'
const express = require("express"),
  index = express();

//Set an array of courses
const courses = [
  {id: 1, course: 'course1'},
  {id: 2, course: 'course2'},
  {id: 3, course: 'course3'}
]


//Routes:
index.get("/", (req, res) => {
  res.send("Hello World");
});

index.get("/api/courses", (req,res) => {
  res.send(courses)
})
//**NEW** 
//The find() method is used to iterate throuh an array and return the values found based off boolean logic.
// Syntax: array.find(eachElementOfTheArray => eachElementOfTheArray.property-value === valueOfIntrest)
// It compares each element's property value in an array to the boolean comparison you set after seting the thick arrow. 
index.get("/api/courses/:id", (req, res) => {
  const course = courses.find(course => course.id === parseInt(req.params.id)) 

  if(!course){
   return res.status(404).send(`No course with the given id of ${req.params.id}.`)
  }
  return res.send(course)
});








//Listen to a port with the .listen() method from express
const port = process.env.PORT || 3000;

index.listen(port, () => {
  console.log(`Listening on PORT: ${port}...`);
});
