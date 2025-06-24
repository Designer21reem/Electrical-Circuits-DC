import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './assets/light.png'
import Hello from './components/Hello'
import About from './components/about'
import Object from './components/Object'
import AboutMe from './components/AboutMe'
//port AboutMe from './components/AboutMe'

import Footer from './components/Footer'
function App() {


  return (
    <main className='overflow-x-hidden'>
       
        <Navbar />
        <Hero />
        <Hello />
        <About />
        <Object />
        <AboutMe />
        
        <Footer />
    </main>
  )
}

export default App
