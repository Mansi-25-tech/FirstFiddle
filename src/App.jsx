import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Brand from "./pages/Brand";
import Contact from "./pages/Contact";
import OurTeam from "./pages/OurTeam";
import PressRelease from "./pages/PressRelease";
import Carrers from "./pages/Carrers";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/brand" element={<Brand />} />
      <Route path="/ourteam" element={<OurTeam />} />
      <Route path="/press-release" element={<PressRelease />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/careers" element={<Carrers />} />
    </Routes>
  );
}

export default App;