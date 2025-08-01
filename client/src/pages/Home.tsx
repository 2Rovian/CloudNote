import { useState, useEffect } from "react"
import type { NoteProps } from "../types/NoteProps";
import { Link } from "react-router-dom";
import { LuTrash2 } from "react-icons/lu";
import { FaEdit, FaPlus } from "react-icons/fa";
import useNotes from "../hooks/useNotes";
// import NewNoteModal from "../modals/NewNoteModal";

function Home() {
  const [NotesData, setNotesData] = useState<NoteProps[]>();
  // const [OpenNewNoteModal, setOpenNewNoteModal] = useState<boolean>(false);
  const { handleDeleteNote } = useNotes();

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await fetch(`http://localhost:5000/api/notes`);
      const NotesData = await response.json();

      setNotesData(NotesData);
    }

    fetchNotes();
  }, [NotesData]);

  return (
    <>
      <main className="max-w-6xl mx-auto w-[90%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-2 mb-4 relative">
        <Link to={'/notes/new'} className="flex items-center justify-center min-h-[225px] h-full border-6 border-dashed border-white/50 rounded-2xl text-5xl text-white/60 hover:text-white hover:border-sky-50 transition-all duration-300 cursor-default"
        >
          <FaPlus />

        </Link>

        {NotesData?.map((note) => (
          <div className="glassy-panel flex flex-col justify-between size-full outline-2 outline-sky-950/10 hover:outline-sky-200 duration-200 ease-in-out max-w-xl mx-auto mt-0"
          key={note._id}
          >
            <div>
              <h2 className="note-title hover:underline w-fit"><Link to={`/notes/${note._id}`}>{note.title}</Link></h2>
              <p className="note-brief mt-2">{note.description}</p>
              <p className="note-content mt-4">
                {note.content.length > 125
                  ? note.content.slice(0, 125) + " ..."
                  : note.content}
              </p>
            </div>
            <div className="flex justify-between mt-4 items-center">
              <div className="flex gap-x-3">
                <Link
                  to={`/notes/edit/${note._id}`}
                  title="Editar"
                  className="p-2 cursor-default rounded-full hover:scale-105 druation-300 ease-in-out hover:bg-sky-100/70 transition-colors hover:text-sky-950 text-xl"
                >
                  <FaEdit />

                </Link>
                <button
                  title="Deletar"
                  type="button"
                  className="p-2 cursor-default rounded-full hover:scale-105 druation-300 ease-in-out hover:bg-sky-100/70 transition-colors hover:text-red-500 text-xl"
                  onClick={() => handleDeleteNote(note._id!)}
                >
                  <LuTrash2 />
                </button>
              </div>
              <Link
                to={`/notes/${note._id}`}
                className="btn-aero cursor-default">Ver nota
              </Link>
            </div>

          </div>
        ))}
      </main>

    </>
  )
}

export default Home