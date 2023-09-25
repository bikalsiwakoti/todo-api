const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 20
    },
    description: {
        type: String,
        required: true,
        maxLength: 50
    },
    date: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['undone', 'upcomming', 'done']
    }
})


const Todo = mongoose.model("Todo", todoSchema);


module.exports = Todo;