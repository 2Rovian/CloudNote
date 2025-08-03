import User from "../models/userSchema.js";

const getNotes = async (req, res) => {
    try {
        const { user_id } = req.params;
        const user = await User.findById(user_id);

        if (!user) return res.status(404).json({ msg: "Usuário não encontrado" });

        res.status(200).json(user.notes)
    } catch (error) {
        res.status(500).json({ msg: "Erro ao buscar notas" });
    }
    const notes = await User.find()
    res.status(200).json(notes);
};

const getNoteById = async (req, res) => {
    try {
        // const { user_id } = req.params;
        const { user_id } = req;
        const { note_id } = req.params;

        const user = await User.findById(user_id);
        const note = user.notes._id(note_id);

        if (!note) return res.status(404).json({ msg: "Nota não encontrada" });

        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({ msg: "Erro ao buscar nota" });
    }
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

export {
    getNotes,
    getNoteById,
    postNote,
    deleteNote,
    patchNote,
    updateNote
};