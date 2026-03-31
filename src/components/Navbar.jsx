import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", anchor: "#about" },
    { name: "Products", path: "/products" },
    { name: "Clients", path: "/clients" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header className="bg-gradient-to-r from-orange-400 via-red-400 to-yellow-300 shadow-md sticky top-0 z-50">
              <div className="flex justify-between items-center h-20 relative">
          <img
            src="/assets/logo.png"
            alt="Shree Samarth Engineering Logo"
            className="h-full w-auto object-contain max-w-[350px] md:max-w-[450px]"
          />

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 text-white text-sm md:text-base font-medium">
            {navLinks.map((link) =>
              link.anchor ? (
                <a
                  key={link.name}
                  href={link.anchor}
                  className="hover:text-black transition duration-200"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className="hover:text-black transition duration-200"
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          {/* Mobile Icons + Hamburger */}
          <div className="flex md:hidden items-center space-x-4">
            <a href="mailto:samarth.engineering9@gmail.com">
              <FaEnvelope className="text-white text-xl" />
            </a>
            <a href="tel:+918767007270">
              <FaPhoneAlt className="text-white text-xl" />
            </a>
            <button onClick={toggleMenu}>
              {menuOpen ? (
                <FaTimes className="text-white text-2xl" />
              ) : (
                <FaBars className="text-white text-2xl" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="absolute top-20 right-4 bg-white rounded-xl shadow-lg p-4 space-y-3 z-50 text-sm font-medium">
              {navLinks.map((link) =>
                link.anchor ? (
                  <a
                    key={link.name}
                    href={link.anchor}
                    className="block text-gray-800 hover:text-orange-600"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="block text-gray-800 hover:text-orange-600"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>
          )}
        </div>
    </header>
  );
};

export default Navbar;
