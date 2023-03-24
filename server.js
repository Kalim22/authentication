const express = require('express')
const cors = require('cors')

require('dotenv').config({
    path: "./secret/.env"
})

require('colors')

require('./config/db')

const app = express()

app.use(cors({
    origin: "*"
}))

app.use(express.json())

// app.use(express.static(''))

app.get('/', (req, res) => {
    res.send('hello worldsdfds')
})

app.use('/', require('./routes/AuthenticateRoutes'))

const port = process.env.PORT || 7000

app.listen(port, (err) => {
    if(err){
        console.log(err)
    }
    console.log(`Server is running on http://localhost:${port}`.bgBlue)
})



