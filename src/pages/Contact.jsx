import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccessMsg("✅ Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setErrorMsg(result.error || "❌ Something went wrong.");
      }
    } catch (error) {
      setErrorMsg("⚠️ Could not connect to the server.");
    }
  };

  return (
    <>
      <Navbar />
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white max-w-4xl w-full rounded-3xl shadow-2xl p-10 border-4 border-orange-300">
        <h2 className="text-4xl font-extrabold text-center mb-8 text-orange-600">
          Get in Touch With Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:flex-row-reverse">
          {/* Contact Form */}
          <div className="order-1 md:order-2 bg-orange-50 p-6 rounded-xl shadow-inner border border-orange-200">
            <h3 className="text-xl font-semibold text-orange-500 mb-4">
              Contact Form
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
              <input
                type="text"
                name="phone"
                placeholder="Your Phone Number"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
              ></textarea>
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg w-full transition duration-300"
              >
                Submit
              </button>
              {successMsg && (
                <p className="text-green-600 text-sm">{successMsg}</p>
              )}
              {errorMsg && (
                <p className="text-red-600 text-sm">{errorMsg}</p>
              )}
            </form>
          </div>

          {/* Social Icons */}
          <div className="order-2 md:order-1 space-y-5 text-lg text-gray-700">
            <div className="flex items-center space-x-4">
              <FaInstagram className="text-pink-500 text-2xl" />
              <a
                href="https://www.instagram.com/shreesamartheng/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600 font-medium"
              >
                Instagram
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FaFacebook className="text-blue-600 text-2xl" />
              <a
                href="https://www.facebook.com/sanjay.mane.5494"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700 font-medium"
              >
                Facebook
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FaLinkedin className="text-blue-500 text-2xl" />
              <a
                href="https://www.linkedin.com/in/samarth-engineering-816370196"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 font-medium"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center space-x-4">
            <FaEnvelope className="text-red-500 text-2xl shrink-0 min-w-fit" />
            <a
            href="mailto:samarth.engineering9@gmail.com"
            className="hover:text-red-600 font-medium break-all"
           >
            samarth.engineering9@gmail.com
            </a>
            </div>

            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-green-600 text-2xl" />
              <a
                href="tel:+918767007270"
                className="hover:text-green-700 font-medium"
              >
                +91 8767007270
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FaWhatsapp className="text-green-500 text-2xl" />
              <a
                href="https://wa.me/918767007270"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-600 font-medium"
              >
                WhatsApp Chat
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-orange-500 text-2xl" />
              <a
                href="https://maps.app.goo.gl/tjTJDHbm5htiG7FZ7"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-600 font-medium"
              >
                Sarve No 101/107, Opp. HP Petrol Pump, Loknagari, MIDC Rd, Ambernath East, 421506
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Contact;
