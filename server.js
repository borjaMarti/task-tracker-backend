const express = require('express')
const app = express()
const mongoose = require('mongoose')
const logger = require('morgan')
const connectDB = require('./config/database')
const tasksRoutes = require('./routes/tasks')
const cors = require('cors')

// Setup environment variables
require('dotenv').config({path: './config/.env'})

// Connect to the DB
connectDB()

// Allow CORS operations for dev purposes
app.use(cors())

// Middleware for parsing form data
app.use(express.urlencoded({ extended: true }))

// Middleware for parsing JSON data
app.use(express.json())

// Request logger
app.use(logger('dev'))

// Routes
app.use('/tasks', tasksRoutes)


app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    