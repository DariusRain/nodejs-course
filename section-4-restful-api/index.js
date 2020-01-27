// Imported the express framework and invoked the value of it to the variable 'index'
const express = require("express"),
  index = express();

// Set the routes below

//Root route
index.get("/", (req, res) => {
  req.send("Hello World");
});
//So what is going on here is that the 'index' variable holding the value of the full
/*express module (Which is a giant object of values, methods, and other objects) and I want to use a method from that giant object 
called 'get' */
//Analogy: if you seen the matrix neo.iWantKungFu(jujitsu, judo)
//If you didnt like that then library.book(characters) - as if your loading characters who have unique values into your own story.

//In this case I am using the get method which is a type of HTTP request out of get, post, put, delete.
//So I interpret it as valueOfExpress.httpMethod(route, callbackFunction) - index.get('/', () => {...})

//Routes for RESTful API
index.get("/api/courses", (req, res) => {
  res.send([1, 2, 3, 4, 5]);
});







//Route Parameters:
//'req.params' for route parameters and 'req.query' for query strings.


//This only send a response with one route parameter.

index.get("/api/courses/:id", (req, res) => {
  res.send(req.params.id);
});

// //This has multiple route parameters

index.get("/api/posts/:year/:month", (req, res) => {
    res.send(`${req.params.year} ${req.params.month}`)
})

// //This one uses query-string paramaters

index.get("/api/posts/q-string-params/:year/:month", (req, res) => {
    res.send(req.query)
})







//Listen to a port with the .listen() method from express
const port = process.env.PORT || 3000;
//'process' is an object that holds another object 'env' which is the enviroment object. Then any variable name you set as the enviroment vairable can
//be accessed. In this case 'PORT'

//The purpose of this is so that your server is watching that port for incoming requests and it also uses it to make responses back as well.
//It is sort of like how you need a phone in order for you to contact others and others to contact you otherwise you will be knocking on people's door.
index.listen(port, () => {
  console.log(`Listening on PORT: ${port}...`);
});
