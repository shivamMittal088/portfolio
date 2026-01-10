import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "../Components/Layout"
import Hero from "../Components/Hero"
import About from "../Components/About"
import Projects from "../Components/Projects"
import Contact from "../Components/Contact"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
