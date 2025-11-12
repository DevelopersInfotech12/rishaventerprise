import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/hero'
import ProductSection from '../components/ProductSection'

const ProductScreen = () => {
  return (
    <div>
      <Navbar/>
      <Hero title="Our Products"/>
      <ProductSection/>
      <Footer/>
    </div>
  )
}

export default ProductScreen
