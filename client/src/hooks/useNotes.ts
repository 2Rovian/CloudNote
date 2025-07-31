import axios from "axios";
import toast from "react-hot-toast";
import type { CreateNoteProps, NoteProps } from "../types/NoteProps";

export default function useNotes() {
    const handleCreateNote = async ({ setTitle, setDescription, setContent, note }: CreateNoteProps) => {
        try {
            await axios.post("http://localhost:5000/api/notes", note);
            toast.success("Nota criada");
            setTitle(""); setDescription(""); setContent("");
        } catch (error) {
            console.error("Erro ao criar nota");
            toast.error("Erro ao criar nota");
        };
    }

    const handleUpdateNote = async (note: NoteProps) => {
        try {
            await axios.put(`http://localhost:5000/api/notes/${note._id}`, note);
            toast.success("Nota editada");
            // setTitle(""); setDescription(""); setContent("");
        } catch (error) {
            console.error("Erro ao editar nota");
            toast.error("Erro ao editar nota");
        };
    }

    const handleDeleteNote = async (note_id: string) => {
        try {
            await axios.delete(`http://localhost:5000/api/notes/${note_id}`);
            toast.success("Nota deletada")
        } catch (error) {
            console.log("Erro ao deletar nota: ", error)
            toast.error("Erro ao deletar nota")
        }
    }

    return { handleCreateNote, handleDeleteNote, handleUpdateNote };
};