"use client"

import React, { useState, useEffect, useRef } from 'react';

const AboutSectionFour = () => {
  const [openRowIndex, setOpenRowIndex] = useState(0);
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

  const faqs = [
    {
      question: "How Long Does a Blasting and Coating Project Take?",
      answer: "Project timelines vary depending on surface size, coating type, and environmental conditions. Typically, small jobs take a few days, while larger industrial projects may take a week or more."
    },
    {
      question: "What Surfaces Can You Blast and Coat?",
      answer: "We work with a wide range of surfaces including steel, aluminum, concrete, and heavy equipment. Our methods ensure optimal adhesion and long-lasting protection."
    },
    {
      question: "Do You Provide On-Site Blasting and Coating Services?",
      answer: "Yes, we offer both in-house and on-site services, depending on the project size and surface type. Our team ensures safety and quality standards are maintained at all times."
    },
    {
      question: "What Types of Coatings Do You Offer?",
      answer: "We specialize in a variety of coatings such as epoxy, polyurethane, zinc-rich primers, and industrial-grade protective finishes designed for corrosion resistance and durability."
    },
    {
      question: "How Do You Ensure Quality and Surface Preparation?",
      answer: "Our technicians follow international surface preparation standards like SSPC and NACE, using high-quality abrasives and inspection tools to ensure a clean, properly profiled surface."
    },
    {
      question: "Will Coating Improve the Lifespan of My Equipment?",
      answer: "Absolutely. Proper surface preparation and coating application protect your assets from corrosion, wear, and harsh weather — significantly extending their service life."
    },
    {
      question: "Do You Offer Warranties on Your Coating Work?",
      answer: "Yes, we stand behind our workmanship and materials. Warranties vary by project type and coating system, and we'll discuss the details during your estimate."
    },
    {
      question: "Can You Remove Rust or Old Coating Layers?",
      answer: "Yes, our blasting process effectively removes rust, old paint, and contaminants, preparing the surface for optimal coating adhesion and finish."
    },
    {
      question: "How Do I Request a Project Estimate?",
      answer: "You can schedule a free on-site inspection or send us details and photos of your project. We'll provide a detailed quote with recommended surface preparation and coating options."
    },
    {
      question: "Do You Follow Safety and Environmental Standards?",
      answer: "Yes, our team adheres to strict safety protocols and environmental regulations. We use dust-controlled equipment and eco-friendly materials wherever possible."
    }
  ];

  const toggleFaq = (index) => {
    const rowIndex = Math.floor(index / 2);
    setOpenRowIndex(openRowIndex === rowIndex ? -1 : rowIndex);
  };

  const isOpen = (index) => {
    const rowIndex = Math.floor(index / 2);
    return openRowIndex === rowIndex;
  };

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className={`flex items-center justify-center gap-2 mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
              }`}
          >
            <svg className="w-5 h-5 text-orange-600 animate-bounce-slow" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="text-orange-600 font-semibold text-sm tracking-wider uppercase">
              FAQ'S
            </span>
          </div>
          <h2
            className={`text-4xl lg:text-4xl font-bold text-gray-900 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            style={{ transitionDelay: '100ms' }}
          >
            <span>
              Frequently{' '}
              </span>
              <span className='bg-gradient-to-r from-blue-700 via-purple-600 to-blue-600 bg-clip-text text-transparent bg-[length:200%_100%] animate-[gradient_3s_ease_infinite]'>
                Asked Questions
              </span>
          </h2>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-2xl hover:shadow-md transition-all duration-700 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{ transitionDelay: `${200 + index * 50}ms` }}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-6 text-left group"
              >
                <h3 className="text-base font-semibold text-gray-900 pr-4 group-hover:text-orange-600 transition-colors duration-300">
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-orange-600 group-hover:scale-110 ${isOpen(index) ? 'rotate-45 bg-orange-600' : ''
                  }`}>
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </button>

              {/* Answer - Collapsible */}
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen(index) ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <div className={`px-6 pb-6 transform transition-transform duration-300 ${isOpen(index) ? 'translate-y-0' : '-translate-y-4'
                  }`}>
                  <p className="text-gray-600 leading-relaxed text-sm font-sans">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutSectionFour;