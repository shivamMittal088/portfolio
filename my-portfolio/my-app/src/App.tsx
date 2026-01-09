import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "../Components/Layout"
import Hero from "../Components/Hero"
import Contact from "../Components/Contact"
import Projects from "../Components/Project"
import Experience from "../Components/Experience"

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Layout route */}
        <Route path="/" element={<Layout />}>

          <Route index element={<Hero />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
          <Route path="experience" element={<Experience />} />

        </Route>

        <Route path="*" element={<div>404</div>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
