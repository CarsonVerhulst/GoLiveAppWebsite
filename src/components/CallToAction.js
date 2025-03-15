import React from 'react';
import './CallToAction.css';
import { ThemeColors } from '../themeColors';

const CallToAction = () => {
  return (
    <section id="cta" className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2>Ready to Feel <span className="gradient-text">Famous?</span></h2>
          <p>Download Go Live today and experience the thrill of being a TikTok star.</p>
          <div className="cta-buttons">
            <a href="https://apps.apple.com" className="app-store-btn">
              <div className="app-store-content">
                <div className="app-store-text">
                  <span>Download on the</span>
                  <strong>App Store</strong>
                </div>
                <div className="app-store-icon">
                  <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
                    <path d="M17.5,12.7c0-0.1,0-0.2,0-0.3c0-2.3,1.9-3.4,2-3.5c-1.1-1.6-2.8-1.8-3.4-1.8c-1.4-0.1-2.8,0.8-3.5,0.8 c-0.7,0-1.8-0.8-3-0.8C7,7.1,5,8.3,4,10.2c-2.1,3.7-0.5,9,1.5,12c1,1.5,2.2,3.1,3.8,3c1.5-0.1,2.1-1,3.9-1s2.3,1,3.9,1 c1.6,0,2.6-1.4,3.6-2.9c1.1-1.7,1.6-3.3,1.6-3.4C18.3,18.9,17.5,15.7,17.5,12.7z"></path>
                    <path d="M14.1,3.8c0.8-1,1.4-2.4,1.2-3.8c-1.2,0-2.6,0.8-3.5,1.8c-0.8,0.9-1.4,2.2-1.3,3.7C11.9,5.5,13.2,4.8,14.1,3.8z"></path>
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
        
        <div className="devices-mockup">
          <div className="device device1"></div>
          <div className="device device2"></div>
          <div className="device device3"></div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;