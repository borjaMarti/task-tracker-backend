const Task = require('../models/Task');

module.exports = {
    getTasks: async (req,res)=>{
        try {
            const tasks = await Task.find();
            res.json(tasks);
        } catch(err) {
            console.log(err);
        }
    },
    fetchTask: async (req,res)=>{
        try {
            const task = await Task.findOne({_id:req.params.id});
            res.json(task);
        } catch(err) {
            console.log(err);
        }
    },
    addTask: async (req, res)=>{
        try {
            const newTask = await Task.create(req.body);
            console.log('Task has been added!');
            res.json(newTask);
        } catch(err) {
            console.log(err);
        }
    },
    toggleReminder: async (req, res)=>{
        try {
            const updatedTask = await Task.findOneAndUpdate({_id:req.params.id},{
                reminder: req.body.reminder
            });
            console.log('Reminder Toggled');
            res.json(updatedTask);
        } catch(err) {
            console.log(err);
        }
    },
    deleteTask: async (req, res)=>{
        try {
            const deletedTask = await Task.findOneAndDelete({_id:req.params.id});
            console.log('Deleted Todo');
            res.json(deletedTask);
        } catch(err) {
            console.log(err);
        }
    }
};