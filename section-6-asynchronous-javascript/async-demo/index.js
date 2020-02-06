//Darius Rain
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