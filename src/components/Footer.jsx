import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const handleAddressClick = () => {
    const address = "Sarve No 101/107, Opp. HP Petrol Pump, Loknagari, MIDC Rd, Ambernath East, 421506, India";
    const encodedAddress = encodeURIComponent(address);
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <footer className="bg-[#222] text-white py-14 px-4 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* About */}
        <div>
          <h3 className="text-2xl font-bold mb-2">ABOUT <br /> SHREESAMARTH</h3>
          <div className="w-12 h-1 bg-white mb-6" />
          <p className="text-gray-300 mb-8">
            Established in 2002, Shree Samarth Engineering has been indulged in manufacturing, trading and supplying of Cement Storage Silos, Fly Ash Storage Silo, Milk Storage Silos, Screw Conveyor, Conveyor System, Bucket Elevators and many more.
          </p>
          <div className="flex flex-wrap gap-4 text-2xl mt-4">
            <a href="https://www.facebook.com/sanjay.mane.5494" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors duration-200"><FaFacebookF /></a>
            <a href="https://www.instagram.com/shreesamartheng/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors duration-200"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/samarth-engineering-816370196" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-200"><FaLinkedinIn /></a>
            <a href="https://wa.me/918767007270" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors duration-200"><FaWhatsapp /></a>
            <a href="tel:+918767007270" className="hover:text-green-500 transition-colors duration-200"><FaPhoneAlt /></a>
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-bold mb-2">QUICK LINKS</h3>
          <div className="w-12 h-1 bg-white mb-6" />
          <ul className="space-y-4 text-gray-300 text-lg">
            <li><a href="/" className="hover:text-orange-500 transition-colors duration-200">Home</a></li>
            <li><a href="#about" className="hover:text-orange-500 transition-colors duration-200">About Us</a></li>
            <li><a href="/products" className="hover:text-orange-500 transition-colors duration-200">Products</a></li>
            <li><a href="/clients" className="hover:text-orange-500 transition-colors duration-200">Clients</a></li>
            <li><a href="/gallery" className="hover:text-orange-500 transition-colors duration-200">Gallery</a></li>
            <li><a href="/contact" className="hover:text-orange-500 transition-colors duration-200">Contact</a></li>
          </ul>
        </div>
        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-bold mb-2">CONTACT INFO</h3>
          <div className="w-12 h-1 bg-white mb-6" />
          <div className="text-gray-300 space-y-4 text-base">
            <div 
              className="flex items-start gap-3 cursor-pointer group hover:text-orange-300 transition-all duration-200"
              onClick={handleAddressClick}
              title="Click to open in Google Maps"
            >
              <FaMapMarkerAlt className="text-orange-400 text-xl mt-1 group-hover:text-orange-300 transition-colors duration-200" />
              <span className="group-hover:underline">Sarve No 101/107, Opp. HP Petrol Pump, Loknagari, MIDC Rd, Ambernath East, 421506, India</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-green-400 text-xl" />
              <a href="tel:+918767007270" className="hover:text-green-300 transition-colors duration-200">+91 8767007270</a>
              <span>/</span>
              <a href="tel:+919869507719" className="hover:text-green-300 transition-colors duration-200">+91 9869507719</a>
            </div>
            <div className="flex items-center gap-3">
              <FaWhatsapp className="text-green-500 text-xl" />
              <a href="https://wa.me/918767007270" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors duration-200">WhatsApp Chat</a>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-red-400 text-xl" />
              <a href="mailto:samarth.engineering9@gmail.com" className="hover:text-red-300 break-all transition-colors duration-200">samarth.engineering9@gmail.com</a>
            </div>
            <div>
              <span className="font-bold text-white">Website:</span> <a href="https://www.shreesamartheng.com" className="ml-2 text-orange-500 hover:underline transition-all duration-200">www.shreesamartheng.com</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-12 pt-8">
        <div className="text-center text-gray-400">
          <p>© Copyright 2025 Shreesamarthengineering. Designed & Developed by Shreesamarthengineering.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 