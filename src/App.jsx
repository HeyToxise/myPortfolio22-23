import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Navbar from './components/Navbar/Navbar'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </>
  )
}

export default App