import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Header from './components/Header'
import Portfolio from './components/portfolio/Portfolio'
import About from './components/About'
import Services from './components/Services'
import Price from './components/Price'
import Footer from './components/Footer'


function App() {


  return (
    <div className='App'>
      <Header />
      <Portfolio />
      <NavBar />
      <About />
      <Services />
      <Price />
      <Footer />
    </div>
  )
}

export default App
