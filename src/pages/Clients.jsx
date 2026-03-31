import React from "react";
import { FaUserTie } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Clients = () => {
  const clientNames = [
    "A M Guddodagi",
    "Alliance Machine Pvt Ltd",
    "Aquarius Engineering Pvt Ltd",
    "Avanish Enterprises",
    "Build Solution",
    "Concretech Equipments",
    "Eco Aqua Project",
    "Godrej & Boycel Mfg Co Ltd",
    "Graystone Enginner",
    "Group Weld Industries",
    "Hupare Infrastructure",
    "J Kumar Infraproject Ltd",
    "J Kumar Infraproject Ltd (G)",
    "Makubahi Infrastructure Pvt Ltd",
    "Navkar Corporation",
    "Phoenix Engineering Works",
    "Prajwal Engineers",
    "Radiant Infra Projects",
    "Ram Engineering & Infrastructure",
    "S S Infra World",
    "Spink Control",
    "SS Infra World LLP",
    "Syncon Equipments",
    "TNA Ready Mix India Pvt Ltd",
    "V S Industries",
    "VST Industries",
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-100 to-white px-6 py-12 font-sans relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/gplay.png')]"></div>

      <div className="relative max-w-6xl mx-auto text-center z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-orange-600 mb-4 tracking-wide drop-shadow-sm">
           Our Esteemed Clients
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg mb-10">
          We are honored to work with some of the most reputed organizations
          across India. Their trust drives us to deliver excellence every day.
        </p>

        {/* Larger Client Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-2">
          {clientNames.map((client, index) => (
            <div
              key={index}
              className="group bg-white shadow-md border-l-4 border-orange-500 hover:border-red-400 hover:shadow-xl transition-all duration-300 ease-in-out p-6 md:p-8 min-h-[120px] flex items-center gap-4 rounded-2xl"
            >
              <div className="text-orange-500 text-2xl group-hover:text-red-500 transition-colors duration-200">
                <FaUserTie />
              </div>
              <div className="text-gray-800 font-semibold text-lg md:text-xl tracking-wide group-hover:text-red-500 transition-colors duration-200">
                {client}
              </div>
            </div>
          ))}
        </div>

        {/* Footer message */}
        <div className="mt-16 text-gray-600 text-sm italic">
          “Building strong partnerships through quality, trust, and commitment.”
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
};

export default Clients;
