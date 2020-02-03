
//NEW: Used the following to create an external route.
//THis is the root route for courses.
const express = require('express'),
Joi = require("@hapi/joi"),
config = require("config"),
helmet = require("helmet"),
morgan = require("morgan"),
router = express.Router();


const courses = [
    { id: 1, course: "course1" },
    { id: 2, course: "course2" },
    { id: 3, course: "course3" }
  ];

  
router.get("/", (req, res) => {
    res.send(courses);
  });
  
  //Route paramaters & '.find()' method.
  router.get("/:id", (req, res) => {
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
  router.post("/", (req, res) => {
    const result = validateCourse(req.body.course);
    console.log(req.body)
    //Return the predefined property '.error' if it has a truthy value
    if (result) {
       //Log success to the server if the above conditional is false & the client message below.
       console.log(
        `Suceess Validated name: '${req.body.course}'`
      );
    } else {
         console.log(`${result.error}`);
      res.status(400).send("Error code (400): " + result.error);
      //Function execution stops here and returns false.
      return false;
    }
  
    const course = {
      id: courses.length + 1,
      course: req.body.course
    };
    console.log(course)
    courses.push(course);
  
    res.status(200).send(
      course
    );
    return true;
  });
  
  //Put route for updating.
  router.put("/", (req, res) => {
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
  
  router.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const found = searchArrayFindId(courses, id);
  
    if (!found) {
      console.log(`DELETE (error:404): ~>Course ID#: ${id} Cannot be found<~`);
      return res.status(404).send(`Error 404: Not Found \n Course ID#:${id}`);
    }
  
    //TEST found value
    //console.log(courses.indexOf(found))
  
    const deletedCourse = courses.splice(courses.routerOf(found), 1);
  
    //Now log the results to the client and server.
    console.log(`DELETE (success:200): ~>Deleted Course ID#: ${id}<~`);
    return res.status(200).send(`Deleted course: \n ${deletedCourse}`);
  });
  
  module.exports = router;