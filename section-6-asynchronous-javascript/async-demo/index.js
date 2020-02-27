//Darius Rain
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