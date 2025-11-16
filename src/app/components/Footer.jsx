"use client"

import React, { useEffect, useState, useRef } from 'react';
import { Phone, MapPin, Mail, Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  const topLinks = [
    { name: 'About US', href: '/about' },
    { name: 'Our Service', href: '/services' },
    { name: 'Recent Blog', href: '/blog' },
    { name: 'Our Team', href: '/team' },
    { name: 'Contact Us', href: '/contact' }
  ];

  const services = [
  { name: 'Abrasive Sand Blasting', href: '/services/abrasive-sand-blasting' },
  { name: 'Industrial Spray Painting', href: '/services/industrial-spray-painting' },
  { name: 'Protective Coatings Application', href: '/services/protective-coatings' },
  { name: 'Rust Removal & Surface Preparation', href: '/services/rust-removal' },
  { name: 'Metal Corrosion Prevention', href: '/services/corrosion-prevention' }
];


  const workingHours = [
    { day: 'Mon-Wed', time: '8:00 AM - 7:00 PM' },
    { day: 'Thu-Sat', time: '8:00 AM - 6:00 PM' },
    { day: 'Friday', time: 'Full Day Closed' }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' }
  ];

  return (
    <footer ref={footerRef} className="bg-slate-900 text-white overflow-hidden">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {/* Company Info */}
          <div 
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="flex items-center gap-2 mb-6">
         
           <img src="/images/logo2.png" alt=""  />
            </div>
            <p className="text-gray-400 text-sm mb-6">
           Enhancing strength and appearance through expert blasting and coating solutions.
            </p>
            <div className="space-y-3">
              <a 
                href="tel:+11234567890" 
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 group"
              >
                <div className="relative">
                  <Phone className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300 opacity-0 group-hover:opacity-100" />
                </div>
                <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">+91- 9717222570</span>
              </a>
              <div className="flex items-center gap-3 text-gray-300 group">
                <MapPin className="w-4 h-4 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-sm">House No. 293, Pocket, A-1, Sector 6 Rd, Pocket 1, Sector 6A, Rohini, Delhi, 110085</span>
              </div>
              <a 
                href="mailto:roofprosupport@.com" 
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 group"
              >
                <div className="relative">
                  <Mail className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300 opacity-0 group-hover:opacity-100" />
                </div>
                <span className="text-sm group-hover:translate-x-1 transition-transform duration-300 break-all">Rishaventerprises@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Top Links */}
          

          {/* Our Services */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Our Services
              <span 
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-700"
                style={{ width: isVisible ? '40px' : '0px' }}
              />
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li 
                  key={service.name}
                  className={`transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                  style={{ transitionDelay: `${400 + index * 50}ms` }}
                >
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-all duration-300 text-sm inline-flex items-center group"
                    onMouseEnter={() => setHoveredLink(service.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <span 
                      className="inline-block transition-transform duration-300"
                      style={{
                        transform: hoveredLink === service.name ? 'translateX(8px)' : 'translateX(0)'
                      }}
                    >
                      {service.name}
                    </span>
                    <span 
                      className="ml-2 transition-all duration-300"
                      style={{
                        opacity: hoveredLink === service.name ? 1 : 0,
                        transform: hoveredLink === service.name ? 'translateX(0)' : 'translateX(-8px)'
                      }}
                    >
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Working Hours */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Working Hours
              <span 
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-700"
                style={{ width: isVisible ? '40px' : '0px' }}
              />
            </h3>
            <div className="bg-slate-800 rounded-lg p-5 space-y-4 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {workingHours.map((schedule, index) => (
                <div 
                  key={index} 
                  className={`flex justify-between items-center transition-all duration-500 relative z-10 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                  }`}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  <span className="text-gray-300 text-sm">{schedule.day}</span>
                  <span className="text-white text-sm font-medium">{schedule.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div 
            className={`flex flex-col md:flex-row justify-between items-center gap-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <p className="text-gray-400 text-sm text-center md:text-left">
              Developed By Developers Infotech. All Rights Reserved
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-white text-slate-900 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                    }`}
                    style={{ 
                      transitionDelay: `${700 + index * 100}ms`,
                      transform: hoveredSocial === social.label ? 'scale(1.2) rotate(360deg)' : '',
                      backgroundColor: hoveredSocial === social.label ? '#3b82f6' : '',
                      color: hoveredSocial === social.label ? 'white' : ''
                    }}
                    onMouseEnter={() => setHoveredSocial(social.label)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;