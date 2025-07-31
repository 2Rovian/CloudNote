import mongoose from "mongoose";

const { Schema } = mongoose;

const noteSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: Date, default: Date.now }
})

const Note = mongoose.model('Note', noteSchema);

export default Note;