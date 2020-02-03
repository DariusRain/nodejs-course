//Darius Rain
//File: index.js (Async and sync example)

//Synchronous:
console.log('Synchronous execution: \n')
console.log('Before') //First Line Gets executed 
console.log('Fetching github user') // Then this line
console.log('After') // Then this line


//setTimeout calls a block of code in set amount of time 'setTimeout(callback, milliseconds)'
//Using setTimeout the behavior of asynchrpnous code.
setTimeout(() => {
console.log('\n Asycnchronous execution: \n')
//Asynchronous:
console.log('Before') //First Line Gets executed 
setTimeout(() => console.log('Fetching github user'), 2000) // This line gets executed after 2 seconds (2000 ms)
setTimeout(() => console.log('After'), 3000) // This line gets executed after 3 seconds (3000 ms)
}, 1000)
