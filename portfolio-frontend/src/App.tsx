import Home from "./pages/Home"
import Projects from "./pages/Projects"
import { Routes, Route } from "react-router"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/projects" element={<Projects />}/>
    </Routes>
  )
}

export default App
