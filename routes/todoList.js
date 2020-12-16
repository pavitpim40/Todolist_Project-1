const express = require('express');
const router = express.Router();
const todoListControllers  = require('../controllers/todoList');
const passport = require('passport');

const authentication = passport.authenticate("jwt",{session:false});

const {getTodoList , createTodoList , updateTodoList , deleteTodoList} = todoListControllers

router.get('/',authentication,getTodoList);
router.post('/',authentication,createTodoList);
router.put('/:id',authentication,updateTodoList);
router.delete('/:id',authentication, deleteTodoList);


module.exports = router