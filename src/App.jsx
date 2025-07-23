import React, { useState } from 'react'
import Header from './Header'
import Home from './home'
import ContactCard from './my-card'
import Services from './services'
import Projects from './projects'
import Contact from './contact'
import Digitalclock from './digitalclock'
import Footer from './footer'
import './App.css'

function App() {

  return (
    <>
    <Header />
    <Digitalclock />
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
