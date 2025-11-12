"use client"

import React, { useEffect, useRef, useState } from 'react';

const AboutSectionThree = () => {
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
    <section
      ref={sectionRef}
      className="relative py-20 px-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581092334476-f81ec3b040f9?w=1200&q=80')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/70 animate-fade-in"></div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto">
        <div 
          className={`bg-white rounded-lg shadow-2xl p-12 lg:p-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Left Side - Content */}
            <div className="space-y-8">
              {/* Header */}
              <div 
                className={`flex items-center gap-3 mb-4 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                <div className="w-12 h-0.5 bg-gradient-to-r from-amber-400 to-orange-600 animate-expand"></div>
                <span className="bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent font-semibold text-sm tracking-wider uppercase">
                  Why Choose Us
                </span>
              </div>

              {/* Title */}
                  <h2
              className={`text-4xl lg:text-5xl font-bold text-gray-900 leading-tight transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{ transitionDelay: '200ms' }}
            >
              Trusted Experts in <span className="text-blue-600">Blasting & Protective</span> Coating Services
            </h2>

              {/* List Items */}
              <div className="space-y-4">

                <div 
                  className={`flex items-start gap-3 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: '400ms' }}
                >
                  <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0 animate-bounce-subtle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <p className="text-gray-700 text-lg hover:text-blue-600 transition-colors duration-300">High-Quality Abrasive Blasting & Surface Preparation</p>
                </div>

                <div 
                  className={`flex items-start gap-3 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: '500ms' }}
                >
                  <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0 animate-bounce-subtle" style={{ animationDelay: '0.1s' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <p className="text-gray-700 text-lg hover:text-blue-600 transition-colors duration-300">Durable Industrial Coating for Long-Term Protection</p>
                </div>

                <div 
                  className={`flex items-start gap-3 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: '600ms' }}
                >
                  <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0 animate-bounce-subtle" style={{ animationDelay: '0.2s' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <p className="text-gray-700 text-lg hover:text-blue-600 transition-colors duration-300">Experienced & Skilled On-Site Workforce</p>
                </div>

                <div 
                  className={`flex items-start gap-3 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: '700ms' }}
                >
                  <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0 animate-bounce-subtle" style={{ animationDelay: '0.3s' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <p className="text-gray-700 text-lg hover:text-blue-600 transition-colors duration-300">Commitment to Safety, Quality & Timely Execution</p>
                </div>

              </div>
            </div>

            {/* Right Side - Image with Video */}
            <div className="space-y-6 ">
              <p 
                className={`text-gray-600 leading-relaxed transition-all duration-700 text-justify font-sans ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                Rishav Enterprise ensures industry-standard blasting and coating solutions 
                designed to extend the life of metal structures, equipment, and industrial surfaces. 
                We follow a structured workflow with strict quality checks, ensuring corrosion resistance, 
                surface durability, and high-performance finishing in every project.
              </p>

              {/* Video Thumbnail */}
              <div 
                className={`relative rounded-lg overflow-hidden shadow-lg group cursor-pointer transition-all duration-700 hover:shadow-2xl hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
                style={{ transitionDelay: '500ms' }}
              >
                <img
                  src="/images/img15.jpg"
                  alt="Industrial coating process"
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors duration-300">
                  <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse-slow">
                    <svg className="w-8 h-8 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes expand {
          from {
            width: 0;
          }
          to {
            width: 3rem;
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 0.7;
          }
        }

        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(4px);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.9;
          }
        }
        
        .animate-expand {
          animation: expand 0.8s ease-out 0.2s both;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutSectionThree;