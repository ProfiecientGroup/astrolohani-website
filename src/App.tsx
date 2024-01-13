import React, { Suspense } from "react";
import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeComponent from "./components/home/Home";
import Layout from "./components/shared/Layout/Layout";
import AboutUs from "./components/aboutUs/AboutUs";
import ContactUsForm from "./components/contactus/ContactUsForm";
import Contact from "./components/contactus/Contact";
import VedicKundali from "./components/services/VedicKundali";
import VastuVisit from "./components/services/VastuVisit";
import VarshikFal from "./components/services/VarshikFal";
import Gemstone from "./components/services/Gemstone";
import Predictions from "./components/services/Predictions";
import KundaliMilan from "./components/services/KundaliMilan";

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/services/vedic-kundali" element={<VedicKundali />} />
            <Route path="/services/vastu-visit" element={<VastuVisit />} />
            <Route path="/services/gemstone" element={<Gemstone />} />
            <Route path="/services/varshik-fal" element={<VarshikFal />} />
            <Route path="/services/kundali-milan" element={<KundaliMilan />} />
            <Route path="/services/predictions" element={<Predictions />} />
            <Route path="/contact-us" element={<Contact/>} />
          </Routes>
        </Layout>
      </Router>
    </Suspense> 
  );
};

export default App;
