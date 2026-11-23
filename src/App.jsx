
import Nav from './components/Navbar.jsx'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'  
import Intro from './components/Intro.jsx'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Certificates from './pages/Certificates.jsx'
import Contact from "./pages/Contact.jsx"
function App() {

  const [showIntro, setShowIntro] = useState(true)

  useEffect(() =>{
    const timer = setTimeout(() => {setShowIntro(false)}, 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
    <Nav />
    <AnimatePresence>
      {showIntro && <Intro onFinish={() => setShowIntro(false)}  />}
    </AnimatePresence>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/certificates" element={<Certificates />} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    </>
  )
}

export default App