const express = require('express')
const router = express.Router()
const tasksController = require('../controllers/tasks') 

router.get('/', tasksController.getTasks)

router.get('/fetchTask/:id', tasksController.fetchTask)

router.post('/addTask', tasksController.addTask)

router.put('/markComplete', tasksController.markComplete)

router.put('/markIncomplete', tasksController.markIncomplete)

router.delete('/deleteTask', tasksController.deleteTask)

module.exports = router