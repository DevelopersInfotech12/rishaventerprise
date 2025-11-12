"use client"

import React, { useState, useEffect, useRef } from 'react';
import { Shield, Brush, SprayCan, TowerControl } from 'lucide-react';

const HomeSectionTwo = () => {
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

  const benefits = [
    {
      icon: <SprayCan className="w-6 h-6" />,
      title: "Professional Blasting Work",
      description: "We provide precise abrasive blasting to remove rust, scale, paint, and surface contamination.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: <Brush className="w-6 h-6" />,
      title: "High-Performance Coating",
      description: "We apply industrial-grade coatings that offer long-term corrosion and surface protection.",
      color: "from-amber-500 to-orange-600"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Coating Solutions",
      description: "Ensuring durability and surface protection in harsh weather and industrial environments.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <TowerControl className="w-6 h-6" />,
      title: "On-Site & In-Plant Service",
      description: "Flexible service execution based on your project needs, whether on-site or in our facility.",
      color: "from-gray-700 to-gray-900"
    }
  ];

  return (
    <section ref={sectionRef} className="py-12 px-4 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Image Section */}
          <div 
            className={`relative group transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl rotate-3 group-hover:rotate-6 transition-transform duration-500 opacity-10 animate-pulse"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
              <img
                src="/images/img5.jpg"
                alt="Industrial Blasting and Coating"
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-500"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-3">
              {/* Badge */}
              <p 
                className={`text-sm font-semibold text-blue-600 tracking-wider uppercase transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                Why Choose Us
              </p>
              
              {/* Heading */}
              <h2 
                className={`text-4xl md:text-5xl font-bold text-gray-900 leading-tight transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                Industrial Blasting &{' '}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
                  Coating Experts
                </span>
              </h2>
              
              {/* Description */}
              <p 
                className={`text-gray-600 leading-relaxed text-base font-sans transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
                }`}
                style={{ transitionDelay: '500ms' }}
              >
                We provide high-quality surface preparation and protective coating services
                to ensure long-lasting durability and corrosion resistance for industrial
                equipment, structures, pipelines, tanks, and metal surfaces.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid sm:grid-cols-2 gap-6 pt-2">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`group relative bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 cursor-pointer ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className='flex flex-row gap-4'>
                      <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                        {benefit.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          {benefit.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed font-sans justify-content mt-3 group-hover:text-gray-700 transition-colors duration-300">
                    {benefit.description}
                  </p>
                  
                  {/* Hover effect border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-400 transition-all duration-300 pointer-events-none"></div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSectionTwo;