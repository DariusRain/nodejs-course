//Darius Rain
//File: index.js (Promises)

const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve(1)
        reject(new Error('message'))
    }, 2000)
})

promise
    .then(response => console.log(response))
    .catch(error => console.log(error.message))