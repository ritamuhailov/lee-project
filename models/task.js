import mongoose from "mongoose";
const Schema = mongoose.Schema;

const task = new Schema({
    title: {
        type: String,
        // required: true
    },
    description: {
        type: String,
        // required: true
    },
    dueDate: {
        type: String,
        // required: true
    },
    dependenciesOnOtherTasks: {
        type: String,
        // required: true
    },
    responsibleForExecution: {
        type: String,
        // required: true
    },
    done: {
        type: String,
        // required: true
    }
});

mongoose.models = {};

const Task = mongoose.model("Task", task);

export default Task;