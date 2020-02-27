//Darius Rain
//File: index.js (Consuming Promises)
console.log("Before");

//Converted version
function getUser(id) {
  return new Promise((resolve, reject) => {
    console.log("Fetching github user...");
    setTimeout(() => {
    resolve({ userId: id, gitHubUserName: "DariusRain" });
    }, 1000);
  })
}

//Again converted
function getRepositories(id) {
  return new Promise((resolve, reject) => {
    console.log("Fetching repositories...");
    setTimeout(() => {
     resolve([1, 4, 2, 6]);
    }, 1000);
  })
}



// Use try catch w/ async & await.

// Created a self executing function becuase i want the results ASAP.
(async () => {
// In the try code block imagine it is trying all this code and if ANY result in a falsey value then
// the catch block will be executed. This is somewhat of an alternative to chaining .then() & .catch()
// but in some cases then .then() & .catch() are more suitable.
  try {

    // It tries both promise returning functions.
    const gotUser = await getUser(3);
    const gotRepos = await getRepositories(gotUser.userId)
    console.log(gotUser)
    console.log(gotRepos)
    return gotRepos;
  
    } 
    catch(err) {
    // Executes this block if the above is false.
    return err;

  }
  

})()


