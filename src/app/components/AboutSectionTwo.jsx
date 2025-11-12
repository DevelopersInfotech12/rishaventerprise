"use client"

import React, { useEffect, useRef, useState } from 'react';

const AboutSectionTwo = () => {
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
    <section ref={sectionRef} className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Side - Content */}
          <div className="space-y-6">
            {/* Header */}
            <div
              className={`flex items-center gap-3 mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
              style={{ transitionDelay: '100ms' }}
            >
              <div className="w-12 h-0.5 bg-gradient-to-r from-amber-400 to-orange-600 animate-expand"></div>
              <span className="bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent font-semibold text-sm tracking-wider uppercase">
                Why Us
              </span>
            </div>

            {/* Title */}
            <h2
              className={`text-4xl lg:text-5xl font-bold text-gray-900 leading-tight transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{ transitionDelay: '200ms' }}
            >
              Why Choose <span className="text-blue-600">Rishav Enterprise</span> for Blasting & Coating?
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-2 text-justify font-sans">
              <p
                className={`text-gray-600 leading-relaxed transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: '300ms' }}
              >
                At Rishav Enterprise, we specialize in high-quality abrasive blasting and
                industrial protective coating services. Our work ensures long-term protection
                against corrosion, weathering, and structural wear — especially in heavy
                industrial and fabrication environments.
              </p>

              <p
                className={`text-gray-600 leading-relaxed transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: '400ms' }}
              >
                We maintain strict safety standards, professional workmanship, and timely
                project execution. Every surface is treated with precision, ensuring proper
                adhesion, durability, and performance of applied coatings.
              </p>
            </div>

            {/* CTA Button */}
            <button
              className={`bg-gradient-to-r from-amber-400 to-orange-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-md transition-all duration-700 flex items-center gap-2 group hover:scale-105 hover:shadow-lg ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{ transitionDelay: '500ms' }}
            >
              LEARN MORE
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>

          {/* Right Side - Images */}
          <div className="relative">
            <div
              className={`relative h-[450px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              style={{ transitionDelay: '300ms' }}
              onMouseEnter={() => setHoveredImage('main')}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <img
                src="/images/img14.jpeg"
                alt="Industrial Blasting Excellence"
                className="w-full h-full object-cover transition-transform duration-700"
        
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />

              {/* Glow effect on hover */}
              <div
                className="absolute inset-0 rounded-3xl transition-opacity duration-500"
            
              />
            </div>

            {/* Floating badge - bottom left */}
            <div
              className={`absolute bottom-8 left-8 bg-white rounded-2xl p-6 shadow-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                }`}
              style={{ transitionDelay: '700ms' }}
            >
              <div className="text-center">
                <div className="text-5xl font-black bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent">
                  15+
                </div>
                <div className="text-xs font-bold text-gray-600 mt-2 tracking-widest uppercase">
                  Years
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
        
        .animate-expand {
          animation: expand 0.8s ease-out 0.1s both;
        }
      `}</style>
    </section>
  );
};

export default AboutSectionTwo;