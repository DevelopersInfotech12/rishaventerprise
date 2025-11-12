import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactSection from '../components/ContactSection'
import Hero from '../components/Hero'

const ContactusScreen = () => {
  return (
    <div>
      <Navbar/>
     <Hero title="Contact Us"/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default ContactusScreen
