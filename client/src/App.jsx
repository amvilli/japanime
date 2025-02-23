import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import './app.css'
function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          
          <Route exact path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
