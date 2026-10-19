import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "../Components/Layout"
import Hero from "../Components/Hero"
import About from "../Components/About"
import Projects from "../Components/Projects"
import Experience from "../Components/Experience"
import Contact from "../Components/Contact"
import NotFound from "../Components/NotFound"

export function PortfolioRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

function App() {
  return <BrowserRouter><PortfolioRoutes /></BrowserRouter>
}

export default App
