"use client"

import React, { useEffect, useState, useRef } from 'react';
import Link from "next/link";

const HomeSectionSix = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  const products = [
    {
      id: 1,
      name: 'BL 24800 Automatic',
      price: '299',
      image: '/images/img9.jpeg',
      category: 'Blasting'
    },
    {
      id: 2,
      name: 'DFT Meter',
      price: '449',
      image: '/images/img7.jpg',
      category: 'Measuring'
    },
    {
      id: 3,
      name: 'Flat Abrasive Valve',
      price: '89',
      image: '/images/img8.jpg',
      category: 'Blasting'
    },
    {
      id: 4,
      name: 'SG3 & S+ Spray Gun',
      price: '599',
      image: '/images/img6.jpg',
      category: 'Painting'
    }
  ];

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
    <section ref={sectionRef} className="py-16 px-4 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className={`text-4xl md:text-5xl font-bold text-gray-900 transition-all duration-1000 ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-8'
              }`}
          >
            Featured{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Products
            </span>
          </h2>
          <p
            className={`text-gray-600 max-w-2xl mx-auto mt-3 transition-all duration-1000 delay-200 font-sans font-semibold ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-8'
              }`}
          >
            Discover our handpicked selection of premium products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden transition-all duration-700 ${isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
                }`}
              style={{
                transitionDelay: `${300 + index * 150}ms`,
                transform: hoveredCard === product.id ? 'translateY(-12px)' : '',
                boxShadow: hoveredCard === product.id
                  ? '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(59, 130, 246, 0.3)'
                  : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gradient border effect */}
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-0 transition-opacity duration-500"
                style={{
                  opacity: hoveredCard === product.id ? 0.15 : 0,
                  filter: 'blur(20px)'
                }}
              />

              {/* Product Image */}
              <div className="relative h-72 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-700"
                  style={{
                    transform: hoveredCard === product.id ? 'scale(1.15) rotate(2deg)' : 'scale(1)',
                    filter: hoveredCard === product.id ? 'brightness(1.1)' : 'brightness(1)'
                  }}
                />

                {/* Category badge with glassmorphism */}
                <span
                  className="absolute top-4 left-4 backdrop-blur-md bg-white/80 px-4 py-2 rounded-full text-xs font-bold text-gray-800 z-10 transition-all duration-300 border border-white/50"
                  style={{
                    transform: hoveredCard === product.id ? 'scale(1.1) translateY(-2px)' : 'scale(1)',
                    boxShadow: hoveredCard === product.id ? '0 8px 16px rgba(0,0,0,0.15)' : '0 2px 8px rgba(0,0,0,0.1)'
                  }}
                >
                  {product.category}
                </span>

                {/* Premium gradient overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500"
                  style={{
                    opacity: hoveredCard === product.id ? 1 : 0
                  }}
                />

                {/* Floating action button */}
                <div
                  className="absolute bottom-4 right-4 transition-all duration-500"
                  style={{
                    opacity: hoveredCard === product.id ? 1 : 0,
                    transform: hoveredCard === product.id ? 'translateY(0) rotate(0deg)' : 'translateY(20px) rotate(-90deg)'
                  }}
                >
                  <button className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-blue-50 transition-colors duration-300">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Product Info with enhanced styling */}
              <div className="relative p-6 bg-white">
                {/* Decorative line */}
                <div
                  className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-500"
                  style={{
                    transform: hoveredCard === product.id ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'left'
                  }}
                />

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 transition-colors duration-300"
                  style={{
                    color: hoveredCard === product.id ? '#2563eb' : ''
                  }}>
                  {product.name}
                </h3>

                <div className="flex items-center justify-between mt-6">
                  <Link href="/products">
                  <button
                    className="relative bg-gradient-to-r from-amber-400 to-orange-600 text-white px-6 py-3 rounded-xl transition-all duration-300 text-sm font-bold overflow-hidden shadow-md"
                    style={{
                      transform: hoveredCard === product.id ? 'scale(1.05)' : 'scale(1)',
                      boxShadow: hoveredCard === product.id ? '0 10px 25px rgba(59, 130, 246, 0.4)' : ''
                    }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      View Details
                      <svg
                        className="w-4 h-4 transition-transform duration-300"
                        style={{
                          transform: hoveredCard === product.id ? 'translateX(4px)' : 'translateX(0)'
                        }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                    <span
                      className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 transition-opacity duration-300"
                      style={{
                        opacity: hoveredCard === product.id ? 1 : 0
                      }}
                    />
                  </button>
                   </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div
          className={`text-center mt-12 transition-all duration-1000 ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
            }`}
          style={{ transitionDelay: '900ms' }}
        >
          <Link href="/products">
            <button
              className="inline-block bg-gradient-to-r from-amber-400 to-orange-600 text-white px-8 py-3 rounded-lg transition-all duration-300 font-semibold relative overflow-hidden group"
            >
              <span className="relative z-10">View All Products</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeSectionSix;