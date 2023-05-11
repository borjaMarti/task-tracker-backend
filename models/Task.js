const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: false,
  },
  reminder: {
    type: Boolean,
    required: true,
  },
})

module.exports = mongoose.model('Task', TaskSchema)
