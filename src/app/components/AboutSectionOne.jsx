"use client"

import React, { useEffect, useState, useRef } from 'react';

const AboutSectionOne = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

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

  const handleMouseMove = (e) => {
    if (contentRef.current) {
      const rect = contentRef.current.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height
      });
    }
  };

  return (
    <section ref={sectionRef} className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-10 sm:top-20 right-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent rounded-full blur-3xl transition-all duration-[2000ms]"
          style={{
            transform: isVisible ? 'translate(0, 0) scale(1)' : 'translate(100px, -100px) scale(0.5)',
            opacity: isVisible ? 1 : 0
          }}
        />
        <div 
          className="absolute bottom-10 sm:bottom-20 left-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-tr from-blue-600/5 via-cyan-500/5 to-transparent rounded-full blur-3xl transition-all duration-[2000ms]"
          style={{
            transform: isVisible ? 'translate(0, 0) scale(1)' : 'translate(-100px, 100px) scale(0.5)',
            opacity: isVisible ? 1 : 0,
            transitionDelay: '200ms'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Left Side - Single Clean Image */}
          <div className="relative order-2 lg:order-1">
            <div 
              className={`relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '300ms' }}
              onMouseEnter={() => setHoveredImage('main')}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <img
                src="/images/img13.jpeg"
                alt="Industrial Blasting Excellence"
                className="w-full h-full object-cover transition-transform duration-700"
                style={{
                  transform: hoveredImage === 'main' ? 'scale(1.05)' : 'scale(1)'
                }}
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
              
              {/* Glow effect on hover */}
              <div 
                className="absolute inset-0 rounded-2xl sm:rounded-3xl transition-opacity duration-500"
                style={{
                  opacity: hoveredImage === 'main' ? 1 : 0,
                  boxShadow: 'inset 0 0 100px rgba(59, 130, 246, 0.2)'
                }}
              />
            </div>

            {/* Floating badge - bottom left */}
            <div 
              className={`absolute bottom-4 left-4 sm:bottom-6 sm:left-6 lg:bottom-8 lg:left-8 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-xl sm:shadow-2xl transition-all duration-1000 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`}
              style={{ transitionDelay: '700ms' }}
            >
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent">
                  15+
                </div>
                <div className="text-xs font-bold text-gray-600 mt-1 sm:mt-2 tracking-widest uppercase">
                  Years
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-5 sm:space-y-6 lg:space-y-8 order-1 lg:order-2">
            {/* Animated label */}
            <div 
              className={`flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="w-8 sm:w-10 lg:w-12 h-0.5 bg-gradient-to-r from-amber-400 to-orange-600 animate-expand"></div>
              <span className="bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent font-semibold text-xs sm:text-sm tracking-wider uppercase">
                ABOUT RISHAV ENTERPRISE
              </span>
            </div>

            {/* Title with gradient */}
            <h2 
              className={`text-3xl sm:text-4xl lg:text-5xl font-black leading-tight transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <span className="text-gray-900">
                Masters of{' '}
              </span>
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent bg-[length:200%_100%] animate-[gradient_3s_ease_infinite]">
                  Blasting & Coating
                </span>
                <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M1 5.5C50 1.5 150 1.5 199 5.5" 
                    stroke="url(#gradient)" 
                    strokeWidth="3" 
                    strokeLinecap="round"
                    className={isVisible ? 'animate-[dash_1.5s_ease-out_forwards]' : ''}
                    style={{
                      strokeDasharray: 200,
                      strokeDashoffset: 200
                    }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="50%" stopColor="#9333EA" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h2>

            {/* Description */}
            <div className="space-y-4 sm:space-y-5 text-left sm:text-justify">
              <p 
                className={`text-base sm:text-lg text-gray-600 leading-relaxed transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '500ms' }}
              >
                We deliver <span className="font-semibold text-gray-900">industrial-grade surface preparation, abrasive blasting, and protective coating services</span> that stand the test of time. From manufacturing plants to power facilities, we ensure structural integrity and corrosion resistance across every project.
              </p>

              <p 
                className={`text-sm sm:text-base text-gray-600 leading-relaxed transition-all duration-700 font-sans ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                Our expert team combines cutting-edge equipment with rigorous safety protocols to deliver flawless results—whether it's surface restoration, rust elimination, or specialized protective coatings.
              </p>
            </div>

            {/* Feature pills */}
            <div 
              className={`flex flex-wrap gap-2 sm:gap-3 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '700ms' }}
            >
              {['Precision Work', 'ISO Certified', '24/7 Support'].map((feature, idx) => (
                <div 
                  key={idx}
                  className="group px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-gray-50 to-gray-100 rounded-full border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 cursor-default"
                >
                  <span className="text-xs sm:text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes dash {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </section>
  );
};

export default AboutSectionOne;