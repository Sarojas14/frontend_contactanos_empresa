import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Nosotros from "../pages/Nosotros";
import Recursos from "../pages/Recursos";
import Mision from "../pages/Mision";
import Vision from "../pages/Vision";
import Contactanos from "../pages/Contactanos";


const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/recursos" element={<Recursos />} />
      <Route path="/mision" element={<Mision />} />
      <Route path="/vision" element={<Vision />} />
      <Route path="/contactanos" element={<Contactanos />} />
      
    </Routes>
  </Router>
);

export default AppRoutes;
