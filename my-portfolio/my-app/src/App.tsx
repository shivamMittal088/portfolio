import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router'

function App() {
  // create routing paths here .

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/about" element={<div>About</div>} />
          <Route path="/projects" element={<div>Projects</div>} />
          <Route path="/contact" element={<div>Contact</div>} />
          <Route path="*" element={<div>404 Not Found</div>} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
