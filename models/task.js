import mongoose from "mongoose";
const Schema = mongoose.Schema;

const task = new Schema({
    // project_id: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
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
    dependencies: {
        type: String,
        // required: true
    },
    responsibility: {
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