"use client"

import React, { useEffect, useState, useRef } from 'react';

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
            className={`text-4xl md:text-5xl font-bold text-gray-900 transition-all duration-1000 ${
              isVisible 
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
            className={`text-gray-600 max-w-2xl mx-auto mt-3 transition-all duration-1000 delay-200 font-sans ${
              isVisible 
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
              className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ 
                transitionDelay: `${300 + index * 150}ms`,
                transform: hoveredCard === product.id ? 'translateY(-8px)' : ''
              }}
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500"
                  style={{
                    transform: hoveredCard === product.id ? 'scale(1.1)' : 'scale(1)'
                  }}
                />
                <span 
                  className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-700 z-10 transition-all duration-300"
                  style={{
                    transform: hoveredCard === product.id ? 'scale(1.05)' : 'scale(1)'
                  }}
                >
                  {product.category}
                </span>
                
                {/* Animated overlay on hover */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-300"
                  style={{
                    opacity: hoveredCard === product.id ? 1 : 0
                  }}
                />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-2xl font-bold text-orange-500 transition-transform duration-300"
                    style={{
                      transform: hoveredCard === product.id ? 'scale(1.1)' : 'scale(1)'
                    }}
                  >
                    ₹{product.price}
                  </span>
                  <button
                    className="bg-gradient-to-r from-amber-400 to-orange-600 text-white px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium relative overflow-hidden group"
                    style={{
                      transform: hoveredCard === product.id ? 'scale(1.05)' : 'scale(1)'
                    }}
                  >
                    <span className="relative z-10">View Details</span>
                    <span 
                      className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-400 transition-opacity duration-300"
                      style={{
                        opacity: hoveredCard === product.id ? 1 : 0
                      }}
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div 
          className={`text-center mt-12 transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '900ms' }}
        >
          <button
            className="inline-block bg-gradient-to-r from-amber-400 to-orange-600 text-white px-8 py-3 rounded-lg transition-all duration-300 font-medium relative overflow-hidden group"
          >
            <span className="relative z-10">View All Products</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeSectionSix;