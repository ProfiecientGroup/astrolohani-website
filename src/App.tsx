import React, { Suspense } from "react";
import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeComponent from "./components/home/Home";
import Layout from "./components/shared/Layout/Layout";
import AboutUs from "./components/aboutUs/AboutUs";
import VedicKundali from "./components/services/VedicKundali";

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/services/vedic-kundali" element={<VedicKundali />} />
          </Routes>
        </Layout>
      </Router>
    </Suspense> 
  );
};

export default App;
