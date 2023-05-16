const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasks');

// @desc Fetch all tasks
// @route GET /
router.get('/', tasksController.getTasks);

// @desc Fetch single task
// @route GET /fetchTask/:id
router.get('/fetchTask/:id', tasksController.fetchTask);

// @desc Add new task
// @route POST /addTask
router.post('/addTask', tasksController.addTask);

// @desc Toggle reminder in task
// @route PUT /toggleReminder/:id
router.put('/toggleReminder/:id', tasksController.toggleReminder);

// @desc Delete a task
// @route DELETE /deleteTask/:id
router.delete('/deleteTask/:id', tasksController.deleteTask);

module.exports = router;