import React from 'react'
import Navbar from '../components/Navbar'
import HomeHero from '../components/HomeHero'
import HomeSectionOne from '../components/HomeSectionOne'
import HomeSectionTwo from '../components/HomeSectionTwo'
import HomeSectionThree from '../components/HomeSectionThree'
import HomeSectionFour from '../components/HomeSectionFour'
import HomeSectionFive from '../components/ProductSection'
import HomeSectionSix from '../components/HomeSectionSix'
import Footer from '../components/Footer'

const HomePageScreen = () => {
  return (
    <div>
      <Navbar/>
      <HomeHero/>
      <HomeSectionOne/>
      <HomeSectionTwo/>
      <HomeSectionSix/>
      <HomeSectionThree/>
      <HomeSectionFour/>
      
      <Footer/>
      {/* <HomeSectionFive/> */}
    </div>
  )
}

export default HomePageScreen
