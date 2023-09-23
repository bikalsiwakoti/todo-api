const router = require('express').Router();
const { getAllTodos, addTodo, getOneTodo, updateTodo, deleteTodo } = require('../controllers/todoController');

router.post('/addTodo', addTodo)
router.get('/getAllTodos', getAllTodos)
router.get('/getOneTodo/:id', getOneTodo)
router.patch('/updateTodo/:id', updateTodo)
router.delete('/deleteTodo/:id', deleteTodo)

module.exports = router;