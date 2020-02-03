//Darius Rain
//File: index.js (More Real Example)

//In this example it shows why callbeacks, promises or async and await is used
//in asynchronous operations.


//Asynchronous:
console.log('Before')
console.log('Fetching github user') 
const user = getUserId(1);
console.log(user)
console.log('After') 
console.log('User is undefined becuase ther was no code set to \n handle the asynchronous event \n "setTimeOut()" just executes code in a given set time.')
function getUserId(id) {
    setTimeout(() =>
    { 
        //console.log('Fetching github user') // This line gets executed after 2 seconds (2000 ms)
        return {userId: id, gitHubUserName: 'DariusRain'}
    }, 2000)

}
