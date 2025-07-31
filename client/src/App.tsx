import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./pages/Home"
import NotePage from "./pages/NotePage"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/notes/:note_id" element={<NotePage />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
