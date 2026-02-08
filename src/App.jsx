import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ContactCard from './components/ContactCard'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Contact from './components/Contact'
import DigitalClock from './components/DigitalClock'
import Footer from './components/Footer'
import './app.css'

function App() {

  return (
    <>
    <Navbar />
    <DigitalClock />
    <Home />
    <ContactCard />
    <Services />
    <Projects />
    <Contact />
    <Footer />
    </>
  )
}

export default App
