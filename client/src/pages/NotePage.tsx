import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import type { NoteProps } from "../types/NoteProps";

function NotePage() {
    const { note_id } = useParams();
    const [Note, setNote] = useState<NoteProps>();

    useEffect(() => {
        const fetchNote = async () => {
            const response = await fetch(`http://localhost:5000/api/notes/${note_id}`);
            const NoteData = await response.json();
            console.log(NoteData)
            setNote(NoteData);
            // console.log(response)
        }

        fetchNote();
    }, []);

    return (
        <div>
            <h1>Está é a página de notas</h1>
            <p>Este é o id da nota: {note_id}</p>
            <p>{Note?.title}</p>
            <p>{Note?.description}</p>
            <p>{Note?.content}</p>
        </div>
    )
};

export default NotePage;