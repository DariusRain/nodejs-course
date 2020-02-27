const mongoose = require('mongoose');
const db = process.env.DB
const enviroment = process.env.NODE_ENV

console.log(db)
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(connection => {
        console.log('Connected to database')
    })
    .catch(err => {
        console.log('Error connecting to DB')
    })