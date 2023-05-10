const Todo = require('../models/Task')

module.exports = {
    getTasks: async (req,res)=>{
        try{
            const tasks = await Todo.find()
            res.json(tasks)
        }catch(err){
            console.log(err)
        }
    },
    fetchTask: async (req,res)=>{
        try{
            const task = await Todo.findOne({_id:req.params.id})
            res.json(task)
        }catch(err){
            console.log(err)
        }
    },
    addTask: async (req, res)=>{
        try{
            await Todo.create(req.body.task)
            console.log('Todo has been added!')
            res.redirect('/todos')
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    deleteTask: async (req, res)=>{
        try{
            await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted Todo')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    