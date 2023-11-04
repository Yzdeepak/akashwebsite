
import React from 'react'
import "./App.css"
import Nav from './components/Nav'
import { Home } from './components/Home'
import About from './components/About'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Footer />
    </div>
  )
}

export default App