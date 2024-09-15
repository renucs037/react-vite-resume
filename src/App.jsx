import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Service from './components/Services/Service'
import Mywork from './components/mywork/Mywork'
import Contact from './components/contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Mywork />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
