import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import AboutSectionOne from '../components/AboutSectionOne'
import AboutSectionTwo from '../components/AboutSectionTwo'
import AboutSectionThree from '../components/AboutSectionThree'
import AboutSectionFour from '../components/AboutSectionFour'

const AboutScreen = () => {
    return (
        <div>
            <Navbar />
            <Hero title="About Us"/>
            <AboutSectionOne />
            <AboutSectionTwo/>
            <AboutSectionThree/>
            <AboutSectionFour/>
            <Footer />
        </div>
    )
}

export default AboutScreen
