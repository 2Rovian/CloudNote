import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./pages/Home"
import NotePage from "./pages/NoteDetails"
import Navbar from "./components/Navbar"
import NewNote from "./pages/NewNote"

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
      </BrowserRouter>
    </>
  )
}

export default App
