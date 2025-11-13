"use client"

import React, { useState, useEffect } from 'react';

const HomeHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const mainSlides = [
    {
      image: "/images/img4.jpg",
      title: "SUPPLIERS TO THE BLASTING & COATING INDUSTRY",
      description: "Explore our latest new season backpacking and family tents, lightweight camping stoves, sleeping bags and luxury camping furniture.",
      price: "RISHAV ENTERPRISES",
      cta: "SHOP NOW"
    },
  ];

  const categories = [
    {
      id: 'blasting',
      image: "/images/hero1.png",
      title: "BLASTING",
      delay: "200ms"
    },
    {
      id: 'painting',
      image: "/images/hero2.png",
      title: "PAINTING",
      delay: "300ms"
    },
    {
      id: 'metalizing',
      image: "/images/hero3.png",
      title: "METALIZING",
      delay: "400ms"
    },
    {
      id: 'measuring',
      image: "/images/hero4.png",
      title: "MEASURING",
      delay: "500ms"
    }
  ];

  return (
    <div className="w-full bg-gray-900">
      {/* Mobile Layout - Stack Everything */}
      <div className="block lg:hidden">
        {/* Main Hero Section - Mobile */}
        <div className="relative h-[400px] xs:h-[450px] sm:h-[500px] overflow-hidden">
          {mainSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${
                currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className={`w-full h-full object-cover transition-transform duration-[2000ms] ${
                  isLoaded ? 'scale-100' : 'scale-110'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
              <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6">
                <p 
                  className={`text-lime-400 text-xs sm:text-sm font-semibold mb-2 sm:mb-3 tracking-wider transition-all duration-1000 ${
                    isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}
                  style={{ transitionDelay: '400ms' }}
                >
                  {slide.price}
                </p>
                <h1 
                  className={`text-white text-xl xs:text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 leading-tight transition-all duration-1000 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: '600ms' }}
                >
                  {slide.title}
                </h1>
                
                <div 
                  className="h-0.5 sm:h-1 bg-gradient-to-r from-lime-400 to-transparent transition-all duration-1000"
                  style={{ 
                    width: isLoaded ? '100px' : '0px',
                    transitionDelay: '800ms'
                  }}
                />
              </div>
            </div>
          ))}

          <div className="absolute bottom-4 left-4 flex gap-2">
            {mainSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-white w-6 sm:w-8' : 'bg-white/50'
                } ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
                style={{ transitionDelay: `${1000 + index * 100}ms` }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Categories Grid - Mobile (2x2) */}
        <div className="grid grid-cols-2 gap-0">
          {categories.map((category) => (
            <div 
              key={category.id}
              className={`relative h-[200px] xs:h-[220px] sm:h-[250px] overflow-hidden cursor-pointer transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: category.delay }}
              onMouseEnter={() => setHoveredCard(category.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setHoveredCard(hoveredCard === category.id ? null : category.id)}
            >
              <div className="absolute inset-0 bg-white">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-contain p-3 xs:p-4 sm:p-6 transition-all duration-700"
                  style={{
                    transform: hoveredCard === category.id ? 'scale(1.05)' : 'scale(1)'
                  }}
                />
              </div>
              
              <div 
                className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-800/60 to-transparent transition-all duration-500"
                style={{
                  opacity: hoveredCard === category.id ? 0.95 : 1
                }}
              />
              
              <div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-700"
                style={{
                  transform: hoveredCard === category.id ? 'translateX(100%)' : 'translateX(-100%)'
                }}
              />
              
              <div className="absolute bottom-0 left-0 p-3 xs:p-4 sm:p-5 w-full">
                <h3 
                  className="text-white text-sm xs:text-base sm:text-lg font-bold transition-all duration-300 mb-1"
                  style={{
                    transform: hoveredCard === category.id ? 'translateY(-4px)' : 'translateY(0)'
                  }}
                >
                  {category.title}
                </h3>
                <p 
                  className="text-lime-400 text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300"
                  style={{
                    transform: hoveredCard === category.id ? 'translateX(4px)' : 'translateX(0)'
                  }}
                >
                  Explore Now
                  <span 
                    className="text-sm ml-1 inline-block transition-transform duration-300"
                    style={{
                      transform: hoveredCard === category.id ? 'translateX(4px)' : 'translateX(0)'
                    }}
                  >
                    ›
                  </span>
                </p>
              </div>
              
              <div 
                className="absolute top-0 right-0 w-10 h-10 xs:w-12 xs:h-12 border-t-2 border-r-2 border-lime-400 transition-all duration-500"
                style={{
                  opacity: hoveredCard === category.id ? 1 : 0,
                  transform: hoveredCard === category.id ? 'translate(0, 0)' : 'translate(8px, -8px)'
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Layout - Side by Side */}
      <div className="hidden lg:grid lg:grid-cols-2 gap-0">
        {/* Main Hero Section - Desktop */}
        <div className="relative h-screen overflow-hidden">
          {mainSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${
                currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className={`w-full h-full object-cover transition-transform duration-[2000ms] ${
                  isLoaded ? 'scale-100' : 'scale-110'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
              <div className="absolute inset-0 flex flex-col justify-center px-12 xl:px-16">
                <p 
                  className={`text-lime-400 text-sm xl:text-base font-semibold mb-4 tracking-wider transition-all duration-1000 ${
                    isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}
                  style={{ transitionDelay: '400ms' }}
                >
                  {slide.price}
                </p>
                <h1 
                  className={`text-white text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-6 leading-tight transition-all duration-1000 max-w-2xl ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: '600ms' }}
                >
                  {slide.title}
                </h1>
                
                <div 
                  className="h-1 bg-gradient-to-r from-lime-400 to-transparent transition-all duration-1000"
                  style={{ 
                    width: isLoaded ? '200px' : '0px',
                    transitionDelay: '800ms'
                  }}
                />
              </div>
            </div>
          ))}

          <div className="absolute bottom-8 left-12 xl:left-16 flex gap-2">
            {mainSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-white w-8' : 'bg-white/50'
                } ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
                style={{ transitionDelay: `${1000 + index * 100}ms` }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Categories Grid - Desktop */}
        <div className="grid grid-rows-2 gap-0">
          <div className="grid grid-cols-2 gap-0">
            {categories.slice(0, 2).map((category) => (
              <div 
                key={category.id}
                className={`relative h-full overflow-hidden group cursor-pointer transition-all duration-700 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: category.delay }}
                onMouseEnter={() => setHoveredCard(category.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="absolute inset-0 bg-white">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-96 object-contain p-8 xl:p-10 transition-all duration-700"
                    style={{
                      transform: hoveredCard === category.id ? 'scale(1.1)' : 'scale(1)'
                    }}
                  />
                </div>
                
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-gray-700 via-gray-90/50 to-transparent transition-all duration-500"
                  style={{
                    opacity: hoveredCard === category.id ? 0.95 : 1
                  }}
                />
                
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-700"
                  style={{
                    transform: hoveredCard === category.id ? 'translateX(100%)' : 'translateX(-100%)'
                  }}
                />
                
                <div className="absolute bottom-0 left-0 p-6 xl:p-8">
                  <h3 
                    className="text-white text-2xl xl:text-3xl font-bold transition-all duration-300 mb-2"
                    style={{
                      transform: hoveredCard === category.id ? 'translateY(-4px)' : 'translateY(0)'
                    }}
                  >
                    {category.title}
                  </h3>
                  <p 
                    className="text-lime-400 text-sm xl:text-base font-semibold tracking-wider transition-all duration-300"
                    style={{
                      transform: hoveredCard === category.id ? 'translateX(8px)' : 'translateX(0)'
                    }}
                  >
                    Explore Now
                    <span 
                      className="text-lg xl:text-xl ml-1 inline-block transition-transform duration-300"
                      style={{
                        transform: hoveredCard === category.id ? 'translateX(4px)' : 'translateX(0)'
                      }}
                    >
                      ›
                    </span>
                  </p>
                </div>
                
                <div 
                  className="absolute top-0 right-0 w-16 h-16 xl:w-20 xl:h-20 border-t-2 border-r-2 border-lime-400 transition-all duration-500"
                  style={{
                    opacity: hoveredCard === category.id ? 1 : 0,
                    transform: hoveredCard === category.id ? 'translate(0, 0)' : 'translate(8px, -8px)'
                  }}
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-0">
            {categories.slice(2, 4).map((category) => (
              <div 
                key={category.id}
                className={`relative h-full overflow-hidden group cursor-pointer transition-all duration-700 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: category.delay }}
                onMouseEnter={() => setHoveredCard(category.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="absolute inset-0 bg-white">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-96 object-contain p-8 xl:p-10 transition-all duration-700"
                    style={{
                      transform: hoveredCard === category.id ? 'scale(1.1)' : 'scale(1)'
                    }}
                  />
                </div>
                
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-800/60 to-transparent transition-all duration-500"
                  style={{
                    opacity: hoveredCard === category.id ? 0.95 : 1
                  }}
                />
                
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-700"
                  style={{
                    transform: hoveredCard === category.id ? 'translateX(100%)' : 'translateX(-100%)'
                  }}
                />
                
                <div className="absolute bottom-0 left-0 p-6 xl:p-8">
                  <h3 
                    className="text-white text-2xl xl:text-3xl font-bold transition-all duration-300 mb-2"
                    style={{
                      transform: hoveredCard === category.id ? 'translateY(-4px)' : 'translateY(0)'
                    }}
                  >
                    {category.title}
                  </h3>
                  <p 
                    className="text-lime-400 text-sm xl:text-base font-semibold tracking-wider transition-all duration-300"
                    style={{
                      transform: hoveredCard === category.id ? 'translateX(8px)' : 'translateX(0)'
                    }}
                  >
                    Explore Now
                    <span 
                      className="text-lg xl:text-xl ml-1 inline-block transition-transform duration-300"
                      style={{
                        transform: hoveredCard === category.id ? 'translateX(4px)' : 'translateX(0)'
                      }}
                    >
                      ›
                    </span>
                  </p>
                </div>
                
                <div 
                  className="absolute top-0 right-0 w-16 h-16 xl:w-20 xl:h-20 border-t-2 border-r-2 border-lime-400 transition-all duration-500"
                  style={{
                    opacity: hoveredCard === category.id ? 1 : 0,
                    transform: hoveredCard === category.id ? 'translate(0, 0)' : 'translate(8px, -8px)'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;