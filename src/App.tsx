import React from "react";
import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeComponent from "./components/home/Home";

const App = () => {
  return (
    <Box>
      <Router>
        <Routes>
          <Route path="/" Component={HomeComponent} />
        </Routes>
      </Router>
    </Box>
  );
};

export default App;
