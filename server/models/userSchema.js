import mongoose from "mongoose";
import { noteSchema } from "./noteSchema.js";

const { Schema } = mongoose;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: String,
    createdAt: { type: Date, default: Date.now },
    notes: [noteSchema],
})

const User = mongoose.model("User", userSchema);
export default User;