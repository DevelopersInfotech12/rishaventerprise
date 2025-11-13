import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductSection from '../components/ProductSection'
import Hero from '../components/Hero'

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
