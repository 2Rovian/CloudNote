import { useEffect, useState } from "react";
import { IoReturnUpBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import useNotes from "../hooks/useNotes";
import { useParams } from "react-router-dom";

function EditNote() {
    const { note_id } = useParams();
    const { handleUpdateNote } = useNotes()

    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [content, setContent] = useState<string>("");

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const note = { title, description, content, _id: note_id };

        handleUpdateNote(note);
    };

    useEffect(() => {
        const fetchNote = async () => {
            const response = await fetch(`http://localhost:5000/api/notes/${note_id}`);
            const NoteData = await response.json();

            setTitle(NoteData.title); setDescription(NoteData.description); setContent(NoteData.content);
        }

        fetchNote();
    }, []);

    return (
        <div className="pb-6 max-w-6xl mx-auto w-[90%] relative">
            <Link to={'/'}
                className="absolute left-0 flex items-center px-3 py-1 text-slate-200/80 hover:text-slate-200/100 gap-x-1 rounded-full border-2 duration-300 ease-in-out"
            >
                <span className="text-2xl">
                    <IoReturnUpBack />
                </span>
                <span>Voltar</span>
            </Link>

            <form onSubmit={handleFormSubmit} className="glassy-panel w-[90%] max-w-xl mx-auto outline-2 outline-sky-950/10 duration-200 ease-in-out">
                <h1 className="note-title mb-4">Update Nota</h1>

                <label className="block mb-4">
                    <p className="text-md text-slate-700 font-semibold flex justify-between">
                        <span>Título</span>
                        <span className="text-slate-700/70"> {title.length} / 20 </span>
                    </p>
                    <input
                        type="text"
                        className="w-full mt-1 p-3 rounded-lg text-sky-50 placeholder:text-sky-50/80 shadow-inner outline-none ring-2 ring-sky-50/50 focus:ring-sky-50/80 ease-in-out duration-300"
                        placeholder="Digite o título"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        maxLength={20}
                    />
                </label>

                <label className="block mb-4">
                    <p className="text-md text-slate-700 font-semibold flex justify-between">
                        <span>Descrição breve</span>
                        <span className="text-slate-700/70"> {description.length} / 35 </span>
                    </p>
                    <input
                        type="text"
                        className="w-full mt-1 p-3 rounded-lg text-sky-50 placeholder:text-sky-50/80 shadow-inner outline-none ring-2 ring-sky-50/50 focus:ring-sky-50/80 ease-in-out duration-300"
                        placeholder="Resumo da nota"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        maxLength={35}
                    />
                </label>

                <label className="block mb-6">
                    <p className="text-md text-slate-700 font-semibold flex justify-between">
                        <span>Conteúdo</span>
                        <span className="text-slate-700/70"> {content.length} / 500 </span>
                    </p>
                    <textarea
                        className="w-full mt-1 p-3 rounded-lg text-sky-50 placeholder:text-sky-50/80 ring-2 ring-sky-50/50 focus:ring-sky-50/80 shadow-inner outline-none focus:ring-2 resize-none h-40 ease-in-out duration-300"
                        placeholder="Escreva sua nota aqui..."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        maxLength={500}
                    />
                </label>

                <button
                    type="submit"
                    className="btn-aero w-full py-3 text-lg font-semibold"
                >Editar Nota</button>
            </form>
        </div>
    );
}

export default EditNote;
