import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./pages/Home"
import NotePage from "./pages/NoteDetails"
import Navbar from "./components/Navbar"
import NewNote from "./pages/NewNote"
import { Toaster } from "react-hot-toast"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/notes/:note_id" element={<NotePage />}/>
          <Route path="/notes/new" element={<NewNote />}/>
        </Routes>
        <Toaster position='bottom-right'/>
      </BrowserRouter>
    </>
  )
}

export default App
