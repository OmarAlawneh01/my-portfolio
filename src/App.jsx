import React from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import ContactCard from './components/ContactCard'
import Footer from './components/Footer'
import './App.css'

function AppContent() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Home />
      <ContactCard />
      <Services />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
