import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import type { NoteProps } from "../types/NoteProps";
import { IoReturnDownBack } from "react-icons/io5";

function NoteDetails() {
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
        <div className='max-w-6xl mx-auto w-[90%] pb-4'>
            <div className='glassy-panel'>
                <h1 className="note-title hover:underline">{Note?.title}</h1>
                <p className="note-brief mt-2">{Note?.description}</p>
                <p className="note-content mt-4">{Note?.content}</p>
            </div>

            <Link to={'/'}
                className="mt-4 w-fit flex items-center px-3 py-1 text-slate-200/80 hover:text-slate-200/100 gap-x-1 rounded-full border-2 duration-300 ease-in-out mb-4"
            >
                <span className="text-2xl">
                    <IoReturnDownBack />
                </span>
                <span>Voltar</span>
            </Link>
        </div>

    )
};

export default NoteDetails;