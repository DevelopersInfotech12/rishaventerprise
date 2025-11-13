"use client";

import React from 'react'


import BrochureComp from '@/app/components/BrochureComp';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const BrochureScreen = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero title="Our Brochure" />
      <BrochureComp
        title="Rishav Enterprise Company Brochure"
         subtitle="Download Our Company Brochure"
        description="Discover our expertise in industrial blasting and coating solutions designed for durability and performance."
        brochurePdfUrl="/images/brochure.pdf"
        fileName="Rishav-Enterprise-Brochure.pdf"
        whatsInside={[
          "Company Profile & Vision",
          "Complete Product Catalogue",
          "High-Quality Product Images",
          "List of Valued Clients & Projects"
        ]}
        moreInfoTitle="Looking to Collaborate with Us?"
        moreInfoDesc="Partner with us for reliable and long-lasting surface protection solutions tailored to your industrial needs."
        moreInfoButtonText="Get in Touch"
        moreInfoButtonLink="/contact"
      />

      <Footer />
    </div>
  )
}

export default BrochureScreen
