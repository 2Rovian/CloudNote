import { useState } from "react";
import { IoReturnUpBack } from "react-icons/io5";
import { Link } from "react-router-dom";

function NewNote() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="pb-6 max-w-6xl mx-auto w-[90%] relative">
        <Link to={'/'}
        className="absolute left-0 flex items-center px-3 py-1 text-slate-200/70 hover:text-slate-200/100 gap-x-1 rounded-full border-2 duration-300 ease-in-out"
        >
            <span className="text-2xl">
                <IoReturnUpBack />
            </span>
            <span>Voltar</span>
        </Link>
      <main className="glassy-panel w-[90%] max-w-xl mx-auto outline-2 outline-sky-950/10 duration-200 ease-in-out">
        <h1 className="note-title mb-4">Nova Nota</h1>

        <label className="block mb-4">
          <span className="text-md text-slate-700 font-semibold">Título</span>
          <input
            type="text"
            className="w-full mt-1 p-3 rounded-lg bg-slate-200/80 text-slate-900 placeholder:text-slate-500 shadow-inner outline-none focus:ring-2 focus:ring-sky-50 ease-in-out duration-300"
            placeholder="Digite o título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength={20}
          />
        </label>

        <label className="block mb-4">
          <span className="text-md text-slate-700 font-semibold">Descrição breve</span>
          <input
            type="text"
            className="w-full mt-1 p-3 rounded-lg bg-slate-200/80 text-slate-900 placeholder:text-slate-500 shadow-inner outline-none focus:ring-2 focus:ring-sky-50 ease-in-out duration-300"
            placeholder="Resumo da nota"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength={35}
          />
        </label>

        <label className="block mb-6">
          <span className="text-md text-slate-700 font-semibold">Conteúdo</span>
          <textarea
            className="w-full mt-1 p-3 rounded-lg bg-slate-200/80 text-slate-900 placeholder:text-slate-500 shadow-inner outline-none focus:ring-2 focus:ring-sky-50 resize-none h-40 ease-in-out duration-300"
            placeholder="Escreva sua nota aqui..."
            value={content}
            onChange={(e) => setContent(e.target.value)}

          />
        </label>

        <button className="btn-aero w-full py-3 text-lg font-semibold">Salvar Nota</button>
      </main>
    </div>
  );
}

export default NewNote;
