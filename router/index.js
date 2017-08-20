var express = require('express')
var Todo = require('../models/todos')
var router = express.Router()

router.route('/')
  // get all todos
  .get(function (req, res) {
    Todo.find(function (err, todos) {
      if (err) res.send(err)
      res.json(todos)
    })
  })

  // create todo and send back all todos after creation
  .post(function (req, res) {
    // create a todo, information comes from AJAX request from Angular
    Todo.create({text: req.body.text, done: false}, function (err, todo) {
      if (err) res.send(err)
      // get and return all the todos after you create another
      Todo.find(function (err, todos) {
        if (err) res.send(err)
        res.json(todos)
      })
    })
  })

router.route('/:todo_id')
    // delete a todo
    .delete(function (req, res) {
      Todo.remove({_id: req.params.todo_id}, function (err, todo) {
        if (err) res.send(err)
        // get and return all the todos after you create another
        Todo.find(function (err, todos) {
          if (err) res.send(err)

          res.json(todos)
        })
      })
    })

module.exports = router
