const express = require('express')
const app = express()
const mongoose = require('mongoose')
const logger = require('morgan')
const connectDB = require('./config/database')
const tasksRoutes = require('./routes/tasks')
const cors = require('cors')

require('dotenv').config({path: './config/.env'})

connectDB()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))

app.use('/tasks', tasksRoutes)
 
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    