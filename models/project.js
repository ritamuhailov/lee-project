import mongoose from "mongoose";
import Task from "./task";
const Schema = mongoose.Schema;

const project = new Schema({
    title: {
        type: String,
        // required: true
    },
    dueDate: {
        type: Date,
        // required: true
    },
    done: {
        type: Boolean,
        // required: true
    },
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: Task }]
});

mongoose.models = {};

const Project = mongoose.model("Project", project);

export default Project;