// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";

import SSE from "./pages/SSE";
// import About from "./pages/About";
import Clients from "./pages/Clients";
// import Services from "./pages/Services";
import Products from "./pages/Products";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SSE />} />
      {/* <Route path="/about" element={<About />} /> */}
      <Route path="/clients" element={<Clients />} />
      {/* <Route path="/services" element={<Services />} /> */}
      <Route path="/products" element={<Products />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin" element={<Admin />} />
      
    </Routes>
  );
};

export default App;
