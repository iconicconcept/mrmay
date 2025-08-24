import Home from "./pages/Home"
import Projects from "./pages/Projects"
import { Routes, Route } from "react-router"

const myText = "I am a seasoned Full-Stack Developer with hands-on experience building high quality, robust and scalable digital solutions. I specialize in Frontend development, turning complex UIs into functional web applications that have real-world impact."

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home text={myText}/>}/>
      <Route path="/projects" element={<Projects />}/>
    </Routes>
  )
}

export default App
