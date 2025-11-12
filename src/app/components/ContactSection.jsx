"use client"

import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Send, Facebook, Twitter, Linkedin, Instagram, Sparkles } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
  };

  return (
    <div className="relative w-full min-h-screen bg-white py-20 px-4 md:px-8 lg:px-16">
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-50 to-purple-50 rounded-full mb-6 transition-all duration-1000 border border-purple-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}>
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold text-purple-700">Let's Connect</span>
          </div>
          <h2
            className={`text-5xl md:text-6xl font-black text-gray-900 mb-4 transition-all duration-1000 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
            }`}
          >
            Get In{' '}
            <span className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className={`text-base font-sans text-gray-600 max-w-2xl mx-auto transition-all duration-1000 delay-200 max-w-lg ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Ready to start your next project? Drop us a line and let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          {/* Left Column - Contact Information */}
          <div className={`space-y-6 transition-all duration-1000 delay-300  ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}>
            {/* Contact Cards */}
            <div className="bg-gradient-to-br from-blue-100 via-white to-blue-100 rounded-3xl p-8 border-2 border-gray-100 shadow-xl hover:shadow-2xl hover:border-purple-200 transition-all duration-500">
                 <div 
                className={`flex items-center gap-3 mb-4 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: '200ms' }}
              > 
                <span className="bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent font-semibold text-3xl tracking-wider uppercase">
                  CONTACT DETAILS
                </span>
                <div className="w-12 h-0.5 bg-gradient-to-r from-orange-600 to-amber-100 animate-expand"></div>
              </div>

              {/* Location */}
              <div className="group mb-6 cursor-pointer">
                <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-cyan-50 hover:to-purple-50 transition-all duration-300">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-cyan-600 mb-1 uppercase tracking-wide">Location</h4>
                    <p className="text-gray-600 text-sm leading-relaxed font-bold">
                      House No. 293, Pocket A-1, Sector 6 Rd,<br />
                      Pocket 1 Sector 6A, Rohini, Delhi, 110085
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="group mb-6 cursor-pointer">
                <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-300">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-purple-600 mb-1 uppercase tracking-wide">Phone</h4>
                    <p className="text-gray-600 text-sm leading-relaxed font-bold">+91-9717222570</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="group cursor-pointer">
                <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-pink-50 hover:to-orange-50 transition-all duration-300">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-pink-500 to-orange-600 p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-pink-600 mb-1 uppercase tracking-wide">Email</h4>
                    <p className="text-gray-600 text-sm leading-relaxed font-bold">rishaventerprises@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-3xl overflow-hidden border-2 border-gray-100 shadow-xl h-80 hover:shadow-2xl hover:border-purple-200 transition-all duration-500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13998.047590035012!2d77.09647351406251!3d28.704244137842146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d015690c1b7cd%3A0x8f9416f3b78589fc!2sRishav%20Enterprises!5e0!3m2!1sen!2sin!4v1762977123208!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
                className="w-full h-full"
              ></iframe>
            </div>

          
          </div>

          {/* Right Column - Contact Form */}
          <div className={`bg-gradient-to-br from-blue-100 via-white to-blue-100 rounded-3xl p-8 md:p-10 border-2 border-gray-100 shadow-xl hover:shadow-2xl hover:border-purple-200 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}>
              <div 
                className={`flex items-center gap-3 mb-4 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: '200ms' }}
              > 
                <span className="bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent font-semibold text-3xl tracking-wider uppercase">
                  SEND US A MESSAGE
                </span>
                <div className="w-12 h-0.5 bg-gradient-to-r from-orange-600 to-amber-100 animate-expand"></div>
              </div>
            <div className="space-y-5">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-bold text-gray-600 mb-4 uppercase tracking-wide">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="John Doe"
                    className={`w-full bg-gray-50 text-gray-900 border-2 ${focusedField === 'name' ? 'border-purple-500 bg-purple-50' : 'border-gray-200'} placeholder-gray-400 rounded-xl px-4 py-3 outline-none transition-all duration-300 hover:border-purple-300`}
                  />
                </div>
                <div>
                  <label className="text-sm font-bold text-gray-600 mb-1 uppercase tracking-wide">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="john@example.com"
                    className={`w-full bg-gray-50 text-gray-900 border-2 ${focusedField === 'email' ? 'border-purple-500 bg-purple-50' : 'border-gray-200'} placeholder-gray-400 rounded-xl px-4 py-3 outline-none transition-all duration-300 hover:border-purple-300`}
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="text-sm font-bold text-gray-600 mb-4 uppercase tracking-wide">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="How can we help?"
                  className={`w-full bg-gray-50 text-gray-900 border-2 ${focusedField === 'subject' ? 'border-purple-500 bg-purple-50' : 'border-gray-200'} placeholder-gray-400 rounded-xl px-4 py-3 outline-none transition-all duration-300 hover:border-purple-300`}
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-sm font-bold text-gray-600 mb-4 uppercase tracking-wide ">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Tell us about your project..."
                  rows="6"
                  className={`w-full bg-gray-50 text-gray-900 border-2 ${focusedField === 'message' ? 'border-purple-500 bg-purple-50' : 'border-gray-200'} placeholder-gray-400 rounded-xl px-4 py-3 outline-none transition-all duration-300 hover:border-purple-300 resize-none`}
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="group relative w-full bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 hover:from-cyan-500 hover:via-purple-500 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Send className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                <span>Send Message</span>
              </button>
            </div>

              {/* Social Media */}
            <div className="bg-white rounded-3xl p-1 mt-10 border-2 border-gray-100 shadow-xl hover:shadow-2xl hover:border-purple-200 transition-all duration-500">
              <h3 className="text-xl font-bold text-gray-900 text-center mb-1">Follow Us</h3>
              <div className="flex justify-center gap-3">
                <a
                  href="#"
                  className="group relative p-4 rounded-xl transition-all duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-3 shadow-lg group-hover:shadow-xl">
                    <Facebook className="w-5 h-5 text-white" />
                  </div>
                </a>
                <a
                  href="#"
                  className="group relative p-4 rounded-xl transition-all duration-300 hover:scale-110"
                  aria-label="Twitter"
                >
                  <div className="bg-gradient-to-br from-sky-400 to-sky-500 rounded-xl p-3 shadow-lg group-hover:shadow-xl">
                    <Twitter className="w-5 h-5 text-white" />
                  </div>
                </a>
                <a
                  href="#"
                  className="group relative p-4 rounded-xl transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-3 shadow-lg group-hover:shadow-xl">
                    <Linkedin className="w-5 h-5 text-white" />
                  </div>
                </a>
                <a
                  href="#"
                  className="group relative p-4 rounded-xl transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-xl p-3 shadow-lg group-hover:shadow-xl">
                    <Instagram className="w-5 h-5 text-white" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}