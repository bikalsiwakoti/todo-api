const Todo = require("../models/todoModel")

const addTodo = async (req, res) => {
  try {
    const todoData = new Todo(req.body)
    await todoData.save()
    res.status(202).json({
      status: 'success',
      message: "Data saved successfully"
    })
  } catch (err) {
    res.status(500).json({
      status: 'failed',
      message: "Data saved failed",
      error: err
    })
  }
}

const getAllTodos = async (req, res) => {
  try {
    const getOrders = await Todo.find()
    res.status(201).json({
      status: 'success',
      message: "Successfully get data",
      data: getOrders
    })

  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: "Failed to get data",
      error: err
    })
  }
}

const getOneTodo = async (req, res) => {
  try {
    const data = await Todo.findById({ _id: req.params.id })
    res.status(201).json({
      status: 'success',
      message: "Successfully get data",
      data
    })

  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: "Failed to get data",
      error: err
    })
  }
}

const updateTodo = async (req, res) => {
  try {
    const todoUpdate = await Todo.updateOne({ _id: req.params.id }, req.body, { new: true });
    res.status(201).json({
      status: 'success',
      message: "Data updated successfully",
      data: todoUpdate
    })
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: "Failed to update data",
      error: err
    })
  }
}

const deleteTodo = async (req, res) => {
  try {
    const data = await Todo.findByIdAndDelete({ _id: req.params.id })
    res.status(201).json({
      status: 'success',
      message: "Data deleted successfully",
    })

  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: "Failed to delete data",
      error: err
    })
  }
}



module.exports = {
  getAllTodos,
  addTodo,
  getOneTodo,
  updateTodo,
  deleteTodo
}