import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import Footer from "../components/Footer";

const SSE = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [counts, setCounts] = useState({
    projects: 0,
    contractors: 0,
    industries: 0,
    customers: 0
  });
  const [countingComplete, setCountingComplete] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Counting animation effect
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Start counting animation
          const targetCounts = {
            projects: 120,
            contractors: 30,
            industries: 28,
            customers: 300
          };

          const duration = 2000; // 2 seconds
          const steps = 60;
          const stepDuration = duration / steps;

          let currentStep = 0;
          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            
            setCounts({
              projects: Math.floor(targetCounts.projects * progress),
              contractors: Math.floor(targetCounts.contractors * progress),
              industries: Math.floor(targetCounts.industries * progress),
              customers: Math.floor(targetCounts.customers * progress)
            });

            if (currentStep >= steps) {
              clearInterval(timer);
              setCounts(targetCounts);
              setCountingComplete(true);
            }
          }, stepDuration);

          // Cleanup observer after animation starts
          observer.disconnect();
        }
      });
    }, { threshold: 0.5 });

    // Observe the Numbers Speak section
    const numbersSection = document.getElementById('numbers-speak');
    if (numbersSection) {
      observer.observe(numbersSection);
    }

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", anchor: "#about" },
    { name: "Products", path: "/products" },
    { name: "Clients", path: "/clients" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white font-sans text-gray-800 scroll-smooth">
      {/* Header */}
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

      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text mb-6">
          Welcome to Shree Samarth Engineering
        </h2>
        <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          We are a <span className="text-orange-500 font-semibold">leading manufacturer</span> and supplier of premium industrial components like
          <span className="text-red-500"> Silo Accessories</span>,
          <span className="text-indigo-500"> Conveyor Spares</span>,
          <span className="text-green-500"> Screw Conveyors</span>, and more.
        </p>
        <div className="mt-10">
          <Link
            to="/products"
            className="inline-block bg-gradient-to-r from-red-500 to-orange-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 px-8 rounded-full shadow-md transition-transform duration-300 hover:scale-105"
          >
            🚀 Explore Our Services
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-orange-100 py-16 px-4">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 text-center">
          {[
            {
              icon: "💎",
              title: "Quality Products",
              desc: "Reliable and durable components trusted across industries.",
              color: "orange-500",
            },
            {
              icon: "⏱",
              title: "Timely Delivery",
              desc: "We ensure your products arrive on time and intact.",
              color: "red-400",
            },
            {
              icon: "❤️",
              title: "Customer Satisfaction",
              desc: "We exceed expectations and build long-term partnerships.",
              color: "green-500",
            },
          ].map(({ icon, title, desc, color }) => (
            <div
              key={title}
              className={`bg-white rounded-xl p-6 shadow-lg border-t-4 border-${color}`}
            >
              <h3 className={`text-xl font-bold text-${color} mb-3`}>
                {icon} {title}
              </h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>



      {/* About Us Section */}
      <section id="about" className="bg-gradient-to-br from-white via-orange-50 to-white py-24 px-6 scroll-mt-32 md:scroll-mt-28 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-orange-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-red-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-400 rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Shree Samarth</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Image with enhanced styling */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <img
                src="/assets/about-image.jpg"
                alt="About Shree Samarth Engineering"
                className="relative w-full max-w-xl h-[500px] md:h-[700px] object-cover mx-auto rounded-3xl shadow-2xl ring-4 ring-orange-200 group-hover:ring-orange-400 transition-all duration-500 transform group-hover:scale-105"
              />
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-orange-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">20+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
              </div>
            </div>

            {/* Right Side - Enhanced Content */}
            <div className="space-y-8">
              {/* Company Introduction */}
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-2xl border-l-4 border-orange-500">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  🏭 Leading Industrial Manufacturing Excellence
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  <span className="text-orange-600 font-semibold">Shree Samarth Engineering</span> was established in <span className="font-bold text-red-600">2002</span> and has evolved into a trusted name in industrial manufacturing. Under the visionary leadership of <span className="font-bold text-red-600">Mr. Sanjay Ashok Mane</span>, we specialize in manufacturing, trading, and supplying premium industrial components.
                </p>
              </div>

              {/* Core Products */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">🛠️</span>
                  Our Core Product Range
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700">Cement Storage Silos</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700">Fly Ash Silos</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-gray-700">Milk Silos</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Screw Conveyors</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Conveyor Systems</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Bucket Elevators</span>
                  </div>
                </div>
              </div>

              {/* Mission & Vision */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-2xl border border-red-200">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-lg">🎯</span>
                    </div>
                    <h4 className="text-xl font-bold text-red-700">Our Mission</h4>
                  </div>
                  <p className="text-red-800 leading-relaxed">
                    To empower industries with reliable, durable, and high-precision components backed by unmatched service and innovative engineering solutions.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-lg">💡</span>
                    </div>
                    <h4 className="text-xl font-bold text-green-700">Why Choose Us</h4>
                  </div>
                  <ul className="text-green-800 space-y-2 text-sm">
                    <li className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      High manufacturing standards
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      100% on-time delivery
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      Expert technical support
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      Customer satisfaction guarantee
                    </li>
                  </ul>
                </div>
              </div>

              {/* Experience & Reach */}
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 rounded-2xl text-white">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">20+</div>
                    <div className="text-sm opacity-90">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">Pan India</div>
                    <div className="text-sm opacity-90">Service Coverage</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm opacity-90">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gradient-to-br from-gray-900 to-purple-900 py-20 px-6 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-black opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-purple-900"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Section - Text and Progress Bars */}
          <div className="text-white">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-8 drop-shadow-lg">
              Why Choose Us
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
              Due to the skill of our firm to guarantee utmost satisfaction, we have been engaged in providing products to our patrons according to their needs. Our ability in the field of providing the mentioned products has got us positive feedback from all our clients. Some of the features that mark our uniqueness have been mentioned below:
            </p>
            
            {/* Progress Bars */}
            <div className="space-y-6">
              <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-semibold">Unique products</span>
                  <span className="text-orange-400 font-bold">75%</span>
                </div>
                <div className="w-full bg-white rounded-full h-3 overflow-hidden">
                  <div className="bg-orange-500 h-3 rounded-full transition-all duration-2000 ease-out transform origin-left animate-progress" style={{ width: '75%' }}></div>
                </div>
              </div>
              
              <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-semibold">Proper management</span>
                  <span className="text-orange-400 font-bold">80%</span>
                </div>
                <div className="w-full bg-white rounded-full h-3 overflow-hidden">
                  <div className="bg-orange-500 h-3 rounded-full transition-all duration-2000 ease-out transform origin-left animate-progress" style={{ width: '80%' }}></div>
                </div>
              </div>
              
              <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-semibold">Delivery In Time</span>
                  <span className="text-orange-400 font-bold">90%</span>
                </div>
                <div className="w-full bg-white rounded-full h-3 overflow-hidden">
                  <div className="bg-orange-500 h-3 rounded-full transition-all duration-2000 ease-out transform origin-left animate-progress" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Section - Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white rounded-xl p-4 sm:p-6 text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="text-3xl sm:text-4xl text-blue-500 mb-3">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-800 font-semibold text-sm sm:text-base">5 Star Ratings</p>
            </div>
            
            <div className="bg-white rounded-xl p-4 sm:p-6 text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="text-3xl sm:text-4xl text-green-500 mb-3">👥</div>
              <p className="text-gray-800 font-semibold text-sm sm:text-base">Team Members</p>
            </div>
            
            <div className="bg-white rounded-xl p-4 sm:p-6 text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="text-3xl sm:text-4xl text-purple-500 mb-3">✅</div>
              <p className="text-gray-800 font-semibold text-sm sm:text-base">Completed Projects</p>
            </div>
            
            <div className="bg-white rounded-xl p-4 sm:p-6 text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="text-3xl sm:text-4xl text-orange-500 mb-3">👍</div>
              <p className="text-gray-800 font-semibold text-sm sm:text-base">Happy Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers Speak Section */}
      <section id="numbers-speak" className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-orange-500 text-xl font-semibold mb-2">Numbers Speak</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-16">
            We are committed to provide safe solution to many industries
          </h2>
          
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
              <div className="text-center">
                <div className={`text-3xl sm:text-5xl md:text-6xl font-bold text-orange-500 mb-2 ${countingComplete ? 'count-complete' : ''}`}>{counts.projects}</div>
                <p className="text-gray-800 font-semibold text-xs sm:text-sm md:text-base">Projects are Completed</p>
              </div>
              
              <div className="text-center">
                <div className={`text-3xl sm:text-5xl md:text-6xl font-bold text-orange-500 mb-2 ${countingComplete ? 'count-complete' : ''}`}>{counts.contractors}</div>
                <p className="text-gray-800 font-semibold text-xs sm:text-sm md:text-base">Professional Contractors</p>
              </div>
              
              <div className="text-center">
                <div className={`text-3xl sm:text-5xl md:text-6xl font-bold text-orange-500 mb-2 ${countingComplete ? 'count-complete' : ''}`}>{counts.industries}</div>
                <p className="text-gray-800 font-semibold text-xs sm:text-sm md:text-base">Industries We Served</p>
              </div>
              
              <div className="text-center">
                <div className={`text-3xl sm:text-5xl md:text-6xl font-bold text-orange-500 mb-2 ${countingComplete ? 'count-complete' : ''}`}>{counts.customers}+</div>
                <p className="text-gray-800 font-semibold text-xs sm:text-sm md:text-base">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SSE;
