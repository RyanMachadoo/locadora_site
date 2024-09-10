import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CookieBanner.css';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="cookie-banner">
      <p>
        Usamos cookies para melhorar sua experiência. Para mais detalhes, consulte nossa{' '}
        <Link to="/privacy-policy" className="cookie-link">Política de Privacidade</Link>.
      </p>
      <div className="button-container">
        <button onClick={handleAccept} className="accept-btn">Aceitar</button>
        <button onClick={handleDecline} className="decline-btn">Recusar</button>
      </div>
    </div>
  );
};

export default CookieBanner;
