import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Gallery = () => {
  // Create an array of image paths (1.jpg to 19.jpg)
  const images = Array.from({ length: 19 }, (_, i) => `/assets/gallery/${i + 1}.jpg`);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-orange-600 mb-10">
             Our Gallery
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((src, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Gallery;
