const express = require('express');
const router = express.Router();
const todoListControllers  = require('../controllers/todoList');

const {getTodoList , createTodoList , updateTodoList , deleteTodoList} = todoListControllers

router.get('/',getTodoList);
router.post('/',createTodoList);
router.put('/:id',updateTodoList);
router.delete('/:id', deleteTodoList);


module.exports = router