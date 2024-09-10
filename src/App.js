// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './homePage';
import PrivacyPolicyPage from './PrivacyPolicyPage'; 
import CookieBanner from './components/CookieBanner';
function App() {
  return (
   
    <Router>
      <div className="App">
      <CookieBanner/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
