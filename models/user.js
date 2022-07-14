import mongoose from "mongoose";
const Schema = mongoose.Schema;

const user = new Schema({
    name: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});

mongoose.models = {};

const User = mongoose.model("User", user);

export default User; 