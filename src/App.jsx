import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen font-sans bg-brand-white">
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
