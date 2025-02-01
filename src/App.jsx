import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { StreamifyProvider } from "./context/StreamifyContext";

const App = () => {
  

  return (
    <div>
      <Router>
        <StreamifyProvider>
          

          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </StreamifyProvider>
      </Router>
    </div>
  );
};

export default App;