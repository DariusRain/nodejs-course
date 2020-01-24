// Imported the express framework and invoked the value of it to the variable 'index'
const express = require('express'),
index = express();



// Set the routes below

//Root route
index.get('/', (req, res) => {
    req.send('Hello World')
})

//route for api
index.get('/api/routes', (req, res) => {
    res.send([1,2,3,4,5])
})


//Listen to a port with the .listen() method from express
const port = 3000;
index.listen(port, () => {
    console.log(`Listening on PORT: ${port}...`)
})


