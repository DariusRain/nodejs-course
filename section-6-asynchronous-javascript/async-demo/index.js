//Darius Rain
//File: index.js (Callbacks)

//In this example it shows why callbeacks, promises or async and await is used
//in asynchronous operations.

//Asynchronous:
console.log('Before')
//Now that there is a callback function added to log the user
//- once the asynchronous operation is finished.
getUserId(1, (user) => {
    console.log(`Found user:`, user)
});

getRepositories(1, (repos) => {
    console.log('Repositories', repos)
})
console.log('After') 
function getUserId(id, callback) {
    //The 'callback' parameter is expecting a predefined or anonyomous function as its value.
    console.log('Fetching github user...') 
    setTimeout(() =>
    {   
        //See the anonymous function above to see how this function works.
        callback({userId: id, gitHubUserName: 'DariusRain'})
    }, 2000)
}

function getRepositories(id, callback){
    console.log('Fetching repositories...')
    setTimeout(() => {
        callback({userId: id, repos: [1, 4, 2, 6]})
    }, 2000)
}
