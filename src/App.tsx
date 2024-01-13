import React, { Suspense } from "react";
import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeComponent from "./components/home/Home";
import Layout from "./components/shared/Layout/Layout";
import AboutUs from "./components/aboutUs/AboutUs";
import ContactUsForm from "./components/contactus/ContactUsForm";
import Contact from "./components/contactus/Contact";

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<Contact/>} />
          </Routes>
        </Layout>
      </Router>
    </Suspense> 
  );
};

export default App;
