import React, { Suspense } from "react";
import { Box } from "@mui/material";
import { Helmet } from "react-helmet";
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
import MainServices from "./components/services/MainServicesPage";

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Layout>
          <Helmet>
            <title>
              Astrolohani - Your Gateway to Vedic Astrology and Spiritual
              Insights
            </title>
            <meta
              name="description"
              content="Experience the transformative power of Vedic astrology at astrolohani. Get insights into your life's journey, improve spaces with Vastu expertise, discover the radiance of gemstones, navigate the year ahead with annual predictions, and find lasting relationships through horoscope matching."
            />
            <meta
              name="keywords"
              content="astrolohani, best astrologer in rudrapur , best astrologer in uttrakhand, pandit lalit lohani,Vedic astrology, astrology services, horoscope matching, gemstone recommendations, Vastu Shastra, annual predictions, astrologer in Rudrapur, Kundali analysis, cosmic guidance, spiritual insights"
            />
            <meta
              property="og:title"
              content="Astrolohani - Your Trusted Astrologer"
            />
            <meta
              property="og:description"
              content="Unlock the secrets of your life's journey with personalized Vedic Kundali charts."
            />
            <meta
              property="og:image"
              content="https://cdn.astrolohani.com/astrolohani/astrolohani-og-image.png"
            />
          </Helmet>
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/services" element={<MainServices />} />
            <Route path="/services/vedic-kundali" element={<VedicKundali />} />
            <Route path="/services/vastu-visit" element={<VastuVisit />} />
            <Route path="/services/gemstone" element={<Gemstone />} />
            <Route path="/services/varshik-fal" element={<VarshikFal />} />
            <Route path="/services/kundali-milan" element={<KundaliMilan />} />
            <Route path="/services/predictions" element={<Predictions />} />
            <Route path="/contact-us" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </Suspense>
  );
};

export default App;
