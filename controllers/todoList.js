const { uniqueId } = require("lodash");

let todoList = []

const getTodoList = (req,res) => {
    res.status(200).send(todoList);

}


const createTodoList = (req,res) => {
   const newTodo = {
       id : uniqueId(),
       task : req.body.task,
   }

   todoList.push(newTodo);
   res.status(201).send(newTodo);
}


const updateTodoList = (req,res) => {
    const targetId = String(req.params.id);
    const targetIdx = todoList.findIndex(todo => todo.id === targetId);
    todoList[targetIdx] = {
        id : targetId,
        task : req.body.task,
    }

    res.status(200).send({message: "Updating is success"})

}

const deleteTodoList = (req,res) => {
    const targetId = String(req.params.id);
    todoList = todoList.filter(todo => todo.id !== targetId);
    res.status(204).send({message : "Deleting is success"});
}

module.exports = {
    createTodoList,
    getTodoList,
    updateTodoList,
    deleteTodoList
}