"use client"

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const HomeSectionFour = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Homeowner",
      company: "Los Angeles, CA",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      rating: 5,
      text: "Absolutely amazing service! The team was professional, punctual, and thorough. My house has never looked cleaner. They pay attention to every detail and go above and beyond expectations. Highly recommend!",
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Business Owner",
      company: "San Francisco, CA",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      rating: 5,
      text: "We've been using their services for our office for over a year now. The consistency and quality are outstanding. Our workspace always looks immaculate, which really impresses our clients. Worth every penny!",
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Property Manager",
      company: "Miami, FL",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
      rating: 5,
      text: "Managing multiple properties means I need reliable cleaning services. This team has never let me down. They're flexible with scheduling and always deliver exceptional results. True professionals!",
      color: "from-emerald-500 to-teal-600"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Restaurant Owner",
      company: "Chicago, IL",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
      rating: 5,
      text: "In the restaurant industry, cleanliness is everything. These folks understand that completely. They work efficiently without disrupting our operations and maintain the highest standards. Couldn't ask for better!",
      color: "from-orange-500 to-red-600"
    },
    {
      id: 5,
      name: "Jennifer Martinez",
      role: "Healthcare Professional",
      company: "Houston, TX",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80",
      rating: 5,
      text: "As a busy healthcare worker, coming home to a clean house is such a relief. The team is trustworthy, respectful of my space, and does an incredible job. They've made my life so much easier!",
      color: "from-cyan-500 to-blue-600"
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

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const goToSlide = (index) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 space-y-3">
          <p 
            className={`text-sm font-semibold text-blue-600 tracking-wider uppercase transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Client Testimonials
          </p>
          <h2 
            className={`text-4xl md:text-5xl font-bold text-gray-900 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            What Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">Clients Say</span>
          </h2>
          <p 
            className={`text-gray-600 max-w-2xl mx-auto text-lg transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        {/* Main Testimonial Slider */}
        <div 
          className={`relative max-w-5xl mx-auto mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          {/* Background Decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-3xl opacity-5 animate-pulse"></div>
          
          {/* Testimonial Card */}
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-500">
            <div className="grid md:grid-cols-5 gap-8 p-8 md:p-8">
              {/* Left Side - Image */}
              <div 
                className={`md:col-span-2 flex flex-col items-center justify-center space-y-6 transition-all duration-500 ${
                  isAnimating ? 'opacity-0 -translate-x-10' : 'opacity-100 translate-x-0'
                }`}
              >
                <div className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${testimonials[currentSlide].color} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-all duration-300 animate-pulse`}></div>
                  <div className="relative w-48 h-48 rounded-2xl overflow-hidden border-4 border-white shadow-xl group-hover:scale-105 group-hover:rotate-3 transition-all duration-500">
                    <img
                      src={testimonials[currentSlide].image}
                      alt={testimonials[currentSlide].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300">
                    {testimonials[currentSlide].name}
                  </h3>
                  <p className="text-blue-600 font-semibold">
                    {testimonials[currentSlide].role}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonials[currentSlide].company}
                  </p>
                </div>

                {/* Star Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 fill-yellow-400 text-yellow-400 hover:scale-125 transition-transform duration-300"
                      style={{ 
                        animation: isAnimating ? 'none' : `star-bounce 0.5s ease-out ${i * 0.1}s` 
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Right Side - Content */}
              <div 
                className={`md:col-span-3 flex flex-col justify-center space-y-6 transition-all duration-500 ${
                  isAnimating ? 'opacity-0 translate-x-10' : 'opacity-100 translate-x-0'
                }`}
              >
                <Quote className="w-16 h-16 text-blue-600 opacity-20 animate-pulse" />
                
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed italic">
                  "{testimonials[currentSlide].text}"
                </p>

                {/* Navigation Arrows */}
                <div className="flex gap-4 pt-4">
                  <button
                    onClick={prevSlide}
                    disabled={isAnimating}
                    className="group w-12 h-12 rounded-full bg-gradient-to-r from-amber-400 to-orange-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:scale-110 hover:rotate-12 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
                  </button>
                  <button
                    onClick={nextSlide}
                    disabled={isAnimating}
                    className="group w-12 h-12 rounded-full bg-gradient-to-r from-amber-400 to-orange-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:scale-110 hover:-rotate-12 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isAnimating}
                className={`transition-all duration-300 rounded-full hover:scale-125 ${
                  currentSlide === index
                    ? 'w-12 h-3 bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg'
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Thumbnails Grid */}
        <div 
          className={`grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl ${
                currentSlide === index
                  ? 'ring-4 ring-blue-500 scale-105 shadow-xl'
                  : 'opacity-60 hover:opacity-100 hover:scale-105'
              }`}
              style={{ 
                transitionDelay: `${index * 50}ms`,
                animation: isVisible ? `thumbnail-appear 0.5s ease-out ${index * 0.1}s both` : 'none'
              }}
            >
              <div className="aspect-square">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              {currentSlide === index && (
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-20 animate-pulse`}></div>
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-sm font-semibold truncate">
                  {testimonial.name}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes star-bounce {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.3);
          }
        }

        @keyframes thumbnail-appear {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default HomeSectionFour;