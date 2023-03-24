const mongoose = require('mongoose')

const colors = require('colors')

require('dotenv').config({
    path: "../secret/.env"
})

mongoose.connect(process.env.MONGODBURI).then(data => {
    console.log('Database is connected to the server'.bgGreen)
}).catch(err => console.log(err))