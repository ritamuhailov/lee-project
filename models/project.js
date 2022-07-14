import mongoose from "mongoose";
const Schema = mongoose.Schema;

const project = new Schema({
    title: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    },
    done: {
        type: Boolean,
        required: true
    }
});

mongoose.models = {};

const Project = mongoose.model("Project", project);

export default Project;