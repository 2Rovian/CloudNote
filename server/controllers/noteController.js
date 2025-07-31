import Note from "../models/noteSchema.js";

const getNotes = async (req, res) => {
    const notes = await Note.find();
    res.status(200).json(notes);
};

const getNoteById = async (req, res) => {
    const { note_id } = req.params;
    const note = await Note.findById(note_id);
    res.status(200).json(note);
};

const postNote = async (req, res) => {
    const note = await Note.create(req.body);
    res.status(201).json(note);
};

const deleteNote = async (req, res) => {
    const { note_id } = req.params;
    const note = await Note.findByIdAndDelete(note_id);
    res.status(200).json(note);
};

const patchNote = async (req, res) => {
    const { note_id } = req.params;
    const { body } = req;
    const note = await Note.findByIdAndUpdate(note_id, body);
    res.status(200).json(note);
};

const updateNote = async (req, res) => {
    const { note_id } = req.params;
    const { body } = req;
    const note = await Note.findByIdAndUpdate(note_id, body);
    res.status(200).json(note);
};

export { getNotes, getNoteById, postNote, deleteNote, patchNote, updateNote };