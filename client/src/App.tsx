import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./pages/Home"
import NotePage from "./pages/NoteDetails"
import Navbar from "./components/Navbar"
import NewNote from "./pages/NewNote"
import { Toaster } from "react-hot-toast"
import EditNote from "./pages/EditNote"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/notes/:note_id" element={<NotePage />}/>
          <Route path="/notes/new" element={<NewNote />}/>
          <Route path="/notes/edit/:note_id" element={<EditNote />}/>
        </Routes>
        <Toaster position='bottom-right'/>
      </BrowserRouter>
    </>
  )
}

export default App
