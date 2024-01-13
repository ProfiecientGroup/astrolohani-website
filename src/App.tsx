import React from "react";
import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeComponent from "./components/home/Home";
import Layout from "./components/shared/Layout/Layout";
import AboutUs from "./components/aboutUs/AboutUs";

const App = () => {
  return (
    <Box>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" Component={HomeComponent} />
            <Route path="/about-us" Component={AboutUs} />
          </Routes>
        </Layout>
      </Router>
    </Box>
  );
};

export default App;
