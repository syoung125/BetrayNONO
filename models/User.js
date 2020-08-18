import mongoose, { mongo } from "mongoose";

const UserSchema = new mongoose.Schema({
    id: {
        type: String,
        required: "Id is required"
    },
    password: {
        type: String,
        required: "Password is required"
    },
    nickname: {
        type: String,
        required: "Nickname is required"
    }
})

const model = mongoose.model("user", UserSchema)
export default model;