"use client"

import React, { useEffect, useRef, useState } from 'react';

const HomeSectionThree = () => {
  const scrollerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [counters, setCounters] = useState([0, 0, 0, 0]);

  const clients = [
    { name: "Microsoft", logo: "/images/client1.webp" },
    { name: "Google", logo: "/images/client2.webp" },
    { name: "Apple", logo: "/images/client3.png" },
    { name: "Amazon", logo: "/images/client4.webp" },
    { name: "Meta", logo: "/images/client5.png" },
    { name: "Netflix", logo: "/images/client10.png" },
   
    { name: "Oracle", logo: "/images/client8.jpg" },
    { name: "Samsung", logo: "/images/client1.webp" },
     { name: "Tesla", logo: "/images/client2.webp" },
  ];

  const stats = [
    { number: 500, suffix: "+", label: "Happy Clients", color: "from-blue-500 to-cyan-500" },
    { number: 10, suffix: "K+", label: "Projects Done", color: "from-indigo-500 to-purple-500" },
    { number: 98, suffix: "%", label: "Satisfaction Rate", color: "from-purple-500 to-pink-500" },
    { number: 50, suffix: "+", label: "Team Members", color: "from-pink-500 to-rose-500" }
  ];

  // Intersection Observer for scroll animations
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

  // Counter animation
  useEffect(() => {
    if (!isVisible) return;

    const duration = 3000;
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      let currentStep = 0;
      const increment = stat.number / steps;

      const timer = setInterval(() => {
        currentStep++;
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = Math.min(Math.floor(increment * currentStep), stat.number);
          return newCounters;
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  }, [isVisible]);

  // Infinite scroll animation
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const scrollContent = scroller.querySelector('.scroll-content');
    if (!scrollContent) return;

    const items = scrollContent.innerHTML;
    scrollContent.innerHTML = items + items;

    let scrollPos = 0;
    const scrollSpeed = 2;

    const animate = () => {
      scrollPos += scrollSpeed;
      const maxScroll = scrollContent.scrollWidth / 2;
      
      if (scrollPos >= maxScroll) {
        scrollPos = 0;
      }
      
      scrollContent.style.transform = `translateX(-${scrollPos}px)`;
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 space-y-4">
          <p 
            className={`text-sm font-semibold text-blue-600 tracking-wider uppercase transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Trusted By Industry Leaders
          </p>
          <h2 
            className={`text-4xl md:text-5xl font-bold text-gray-900 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">Prestigious Clients</span>
          </h2>
          <p 
            className={`text-gray-600 max-w-2xl mx-auto text-lg transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            Join hundreds of satisfied clients who trust us with their cleaning needs
          </p>
        </div>

        {/* Infinite Slider */}
        <div 
          className={`relative mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{ transitionDelay: '400ms' }}
          ref={scrollerRef}
        >
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling Container */}
          <div className="overflow-hidden">
            <div className="scroll-content flex gap-8 py-4">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="group relative flex-shrink-0 w-48 h-32"
                >
                  {/* Card */}
                  <div className="h-full border-2 border-gray-100 rounded-2xl p-6 flex items-center justify-center transition-all duration-300 group-hover:border-blue-300 group-hover:shadow-2xl group-hover:-translate-y-2 group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-white">
                    {/* Logo Image - REMOVED grayscale filter */}
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-110"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `<div class="text-gray-400 text-sm text-center font-semibold">${client.name}</div>`;
                      }}
                    />
                  </div>
                  
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group text-center bg-gradient-to-br from-gray-100 via-white to-blue-100 space-y-2 p-6 rounded-2xl hover:bg-gradient-to-br hover:from-gray-50 hover:to-blue-50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                {counters[index]}{stat.suffix}
              </div>
              <div className="text-gray-600 font-medium font-sans group-hover:text-gray-800 transition-colors duration-300">
                {stat.label}
              </div>
              
              {/* Border animation on hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-300 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSectionThree;