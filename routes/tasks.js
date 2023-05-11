const express = require('express')
const router = express.Router()
const tasksController = require('../controllers/tasks') 

router.get('/', tasksController.getTasks)

router.get('/fetchTask/:id', tasksController.fetchTask)

router.post('/addTask', tasksController.addTask)

router.put('/toggleReminder/:id', tasksController.toggleReminder)

router.delete('/deleteTask/:id', tasksController.deleteTask)

module.exports = router