//Darius Rain
//File: index.js (Replace Callbacks with promises)
console.log("Before");

getUserId(1, (id) => {
    console.log('Userid', id)
});

getRepositories(1);

console.log("After");

//Old version
// function getUserId(id, callback) {
//     console.log('Fetching github user...')
//     setTimeout(() =>
//     {
//         callback({userId: id, gitHubUserName: 'DariusRain'})
//     }, 2000)
// }

//Converted version
function getUserId(id) {
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
