const express = require('express')

const route = express.Router()

const {userRegister} = require('../controllers/Authenticate')

route.post('/api1/adduser', userRegister)

module.exports = route