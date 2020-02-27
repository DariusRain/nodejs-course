//Darius Rain
<<<<<<< HEAD
//File: index.js async.
const fetch = require('node-fetch');
console.log("Before");
//getUsers()
//getPosts()
getComments()
console.log("After");

//NEW: async & await with try & catch 
//Added dummy data to make it more realistic than before.
async function getUsers() {
 const fetchedData = await fetch('https://jsonplaceholder.typicode.com/users')
 const data = await fetchedData.json()
  try{
    console.log(data)
    }
catch (err) {
  console.log(err)
}
}

//Again converted
async function getPosts() {
  const fetchedData = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await fetchedData.json()
   try{
     console.log(data)
     }
 catch (err) {
   console.log(err)
 }
 }
 
 async function getComments() {
  const fetchedData = await fetch('https://jsonplaceholder.typicode.com/comments')
  const data = await fetchedData.json()
   try{
     console.log(data)
     }
 catch (err) {
   console.log(err)
 }
 }
 //Try and catch is just another way of handling promises instead of using .then and catch you can use try & catch to reduce the amount of code blocks.
=======
//File: index.js (Consuming Promises)
console.log("Before");

//Converted version
function getUser(id) {
  return new Promise((resolve, reject) => {
    console.log("Fetching github user...");
    setTimeout(() => {
    resolve({ userId: id, gitHubUserName: "DariusRain" });
    }, 2000);
  }).then(reslut => console.log(reslut))
  .catch(err => console.log(err))
}

//Again converted
function getRepositories(id) {
  return new Promise((resolve, reject) => {
    console.log("Fetching repositories...");
    setTimeout(() => {
     resolve([1, 4, 2, 6]);
    }, 2000);
  })
  .then(reslut => console.log(reslut))
  .catch(err => console.log(err))
}



// Consuming Promises

// In this example you can see u used two promise returning functions 
// You dont need to nest .then() statements it will automatically return the promise if there is one
// - to the next .then() statement or .catch() if there is an error.
getUser(2)
  .then(result => {
    return result
  })
  .then(result => {
    getRepositories(result)
  })
  .then(result => {
    return result
  })
  .catch(err => {
    return err
  })
>>>>>>> 6-6-consuming-promises-vid-8
