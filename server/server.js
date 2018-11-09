const express = require('express')
const path = require('path')


const userRoutes = require('../routes/users')

const server = express()

// Middleware


server.use(express.urlencoded({extended: true}))
server.use(express.static(path.join(__dirname, './public')))

// Routes

// server.use('/', userRoutes)

module.exports = server
