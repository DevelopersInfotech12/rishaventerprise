"use client"

import React, { useState, useEffect, useRef } from 'react';

const HomeSectionOne = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-white to-gray-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Content */}
          <div className="space-y-6">
            {/* Badge with slide-in animation */}
            <div 
              className={`inline-block border-l-4 border-blue-600 pl-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                About Company
              </span>
            </div>
            
            {/* Heading with fade-in animation */}
            <h1 
              className={`text-4xl md:text-5xl lg:text-5xl font-extrabold text-gray-900 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              Welcome to{' '}
              <span className="block mt-2 text-blue-600 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent animate-pulse">
               RISHAV ENTERPRISES
              </span>
            </h1>
            
            {/* Content paragraphs with staggered fade-in */}
            <div className="space-y-1 text-gray-700 text-base font-sans leading-relaxed text-justify">
              <p 
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                <strong className="text-gray-900">VERTEX ENGINEERS & ASSOCIATES</strong> is a specialized leader in
                <strong> Surface Preparation, Sand/Shot Blasting, and Industrial Protective Coatings</strong>. 
                We provide high-performance corrosion protection solutions for industries requiring durability,
                reliability, and long-term structural preservation.
              </p>
              
              <p 
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                Our services cover a wide range of industrial applications including
                <strong> refineries, power plants, pipelines, steel structures, tanks, heavy machinery,
                marine vessels, fabrication yards, and infrastructure projects.</strong>
              </p>
              
              <p 
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: '500ms' }}
              >
                With skilled technicians, modern equipment, and strict quality control standards, we ensure
                superior finishing and extended asset life. Whether on-site or in our facility, we deliver
                coating systems that meet <strong>ISO, NACE, and industry safety standards.</strong>
              </p>
            </div>
            
            {/* Button with animation */}
            <div 
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <button className="group bg-gradient-to-r from-amber-400 to-orange-600 hover:from-amber-500 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/50 hover:scale-105 inline-flex items-center gap-2">
                Learn More
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Right Image */}
          <div 
            className={`relative lg:pl-12 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            {/* Background Pattern with pulse animation */}
            <div className="absolute top-8 right-8 w-full h-full border-4 border-blue-100 rounded-lg -z-10 animate-pulse"></div>
            
            {/* Main Image Container */}
            <div className="relative rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] group">
              <div className="aspect-[4/3] relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-orange-500/20 group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                <img
                  src="/images/img11.jpg"
                  alt="Industrial Blasting and Coating Services"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Floating Card with bounce animation */}
            <div 
              className={`absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-xl border border-gray-100 transition-all duration-1000 hover:scale-110 hover:shadow-2xl z-50 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: '800ms',
                animation: isVisible ? 'bounce-gentle 2s ease-in-out infinite' : 'none'
              }}
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-600 rounded-lg flex items-center justify-center transition-transform duration-300 hover:rotate-12">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 transition-all duration-300 hover:text-blue-600">20+</p>
                  <p className="text-sm text-gray-600">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-gentle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
};

export default HomeSectionOne;