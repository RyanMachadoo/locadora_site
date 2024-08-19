// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './homePage';
import PrivacyPolicyPage from './PrivacyPolicyPage'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
