import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from "./components/Header.jsx"
import Hero from "./components/Hero.jsx"
import Skills from "./components/Skills.jsx"
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Projects from './components/Projects.jsx'
import Contact from "./components/Contact.jsx"
import Footer from './components/Footer.jsx'

function App() {


  return (
    <>
      <Header/>
      <Hero/>
      <Skills/>
      <Education/>

      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
      
      
    </>
  )
}

export default App



