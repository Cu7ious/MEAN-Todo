var mongoose = require('mongoose')

// define a ToDo model
var Todo = mongoose.model('Todo', {text: String})

module.exports = Todo
