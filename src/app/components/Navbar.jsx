'use client';

import { useState } from 'react';
import { Menu, X, Phone, Facebook, Instagram, Twitter, Youtube, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = [
    { name: 'HOME', href: '/', hasDropdown: false },
    { name: 'ABOUT US', href: '/about', hasDropdown: false },
    { name: 'PRODUCTS', href: '/products', hasDropdown: false },
    { name: 'BLOG', href: '/blog', hasDropdown: false },
    { name: 'CONTACT US', href: '/contact', hasDropdown: false },
  ];

  return (
    <>
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white py-2 md:py-2.5">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 flex justify-center items-center">
          <div className="flex items-center gap-2 sm:gap-4 font-sans text-center">
            <span className="text-xs sm:text-sm opacity-90">🎉 Special Offer: 20% Off All Camping Gear!</span>
            <span className="hidden sm:inline text-xs opacity-75">|</span>
            <span className="hidden sm:inline text-xs md:text-sm opacity-90">Free Shipping on Orders Over $50</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-blue-100">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Left - Menu Items (Desktop) */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 flex-1">
              {menuItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 font-bold text-sm xl:text-[15px] tracking-wide transition-all duration-300 flex items-center gap-1 relative group whitespace-nowrap"
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 duration-300" />
                    )}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                  {item.hasDropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-4 w-56 bg-white shadow-2xl rounded-2xl py-3 border border-blue-50 animate-fadeIn">
                      <div className="absolute -top-2 left-6 w-4 h-4 bg-white border-l border-t border-blue-50 transform rotate-45"></div>
                      <a href="#" className="block px-5 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 hover:text-blue-600 transition-all duration-200 hover:pl-6">
                        🏕️ Camping Tents
                      </a>
                      <a href="#" className="block px-5 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 hover:text-blue-600 transition-all duration-200 hover:pl-6">
                        🎒 Backpacks
                      </a>
                      <a href="#" className="block px-5 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 hover:text-blue-600 transition-all duration-200 hover:pl-6">
                        🔥 Camping Gear
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Center - Logo */}
            <div className="flex-shrink-0 lg:mx-4 xl:mx-8">
              <a href="/" className="flex items-center group">
                <div className="relative transform transition-all duration-300 hover:scale-110">
                  <div className="relative w-32 h-16 sm:w-36 sm:h-20 lg:w-48 lg:h-28 overflow-hidden">
                    {/* Logo */}
                    <img src="/images/logo2.png" alt="Logo" className="w-full h-full object-contain" />
                  </div>
                </div>
              </a>
            </div>

            {/* Right - Contact Info & Social Media (Desktop) */}
            <div className="hidden lg:flex items-center space-x-3 xl:space-x-6 flex-1 justify-end">
              <a href="tel:+919717222570" className="flex items-center gap-2 xl:gap-3 text-gray-700 hover:text-blue-600 transition-all duration-300 group">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-blue-100 group-hover:to-cyan-100 transition-all duration-300 shadow-md group-hover:shadow-lg flex-shrink-0">
                  <Phone className="w-4 h-4 xl:w-5 xl:h-5 text-blue-600" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-500 font-semibold whitespace-nowrap">Call Us</div>
                  <div className="text-xs xl:text-sm font-bold text-gray-800 whitespace-nowrap">+91 9717222570</div>
                </div>
              </a>

              <div className="flex items-center gap-2 xl:gap-3">
                <span className="text-xs xl:text-sm text-gray-500 font-semibold mr-1 xl:mr-2 whitespace-nowrap hidden xl:inline">Follow Us</span>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 xl:w-9 xl:h-9 rounded-full bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-md hover:shadow-lg group flex-shrink-0">
                  <Facebook className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-blue-600 group-hover:text-white transition-colors" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 xl:w-9 xl:h-9 rounded-full bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 transition-all duration-300 shadow-md hover:shadow-lg group flex-shrink-0">
                  <Instagram className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-blue-600 group-hover:text-white transition-colors" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 xl:w-9 xl:h-9 rounded-full bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center hover:bg-gradient-to-br hover:from-sky-400 hover:to-blue-500 transition-all duration-300 shadow-md hover:shadow-lg group flex-shrink-0">
                  <Twitter className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-blue-600 group-hover:text-white transition-colors" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 xl:w-9 xl:h-9 rounded-full bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center hover:bg-gradient-to-br hover:from-red-500 hover:to-red-600 transition-all duration-300 shadow-md hover:shadow-lg group flex-shrink-0">
                  <Youtube className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-blue-600 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 flex-shrink-0"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gradient-to-br from-white to-blue-50 border-t-2 border-blue-100 shadow-xl">
          <div className="px-3 sm:px-4 py-4 sm:py-6 space-y-2 max-w-7xl mx-auto">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2.5 sm:py-3 px-3 sm:px-4 text-gray-800 hover:text-blue-600 hover:bg-white font-semibold text-sm rounded-xl transition-all duration-300 hover:pl-5 sm:hover:pl-6 hover:shadow-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}

            <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t-2 border-blue-100 space-y-3">
              <a href="tel:+919717222570" className="flex items-center gap-3 p-3 sm:p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">Call Us Now</div>
                  <div className="text-sm sm:text-base font-bold text-gray-800">+91 9717222570</div>
                </div>
              </a>

              <div className="p-3 sm:p-4 bg-white rounded-xl shadow-md">
                <div className="text-xs text-gray-500 font-medium mb-3 text-center">Follow Us</div>
                <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg hover:scale-110 transition-transform flex-shrink-0">
                    <Facebook className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-lg hover:scale-110 transition-transform flex-shrink-0">
                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center shadow-lg hover:scale-110 transition-transform flex-shrink-0">
                    <Twitter className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg hover:scale-110 transition-transform flex-shrink-0">
                    <Youtube className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}