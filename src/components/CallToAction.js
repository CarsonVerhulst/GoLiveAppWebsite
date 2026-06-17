import React from 'react';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <section id="cta" className="cta-section">
      <div className="container">
        <div className="cta-card">
          <div className="cta-glow" aria-hidden="true"></div>
          <span className="eyebrow">Go live in 30 seconds</span>
          <h2>Your fans are <span className="gradient-text">waiting.</span></h2>
          <p>Download Go Live Simulator and walk into a room that’s already obsessed with you.</p>

          <div className="cta-buttons">
            <a href="https://apps.apple.com/us/app/golive-go-live-simulator/id6504121037" className="app-store-btn">
              <div className="app-store-content">
                <div className="app-store-text">
                  <span>Download on the</span>
                  <strong>App Store</strong>
                </div>
                <div className="app-store-icon">
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                    <path d="M17.5,12.7c0-0.1,0-0.2,0-0.3c0-2.3,1.9-3.4,2-3.5c-1.1-1.6-2.8-1.8-3.4-1.8c-1.4-0.1-2.8,0.8-3.5,0.8 c-0.7,0-1.8-0.8-3-0.8C7,7.1,5,8.3,4,10.2c-2.1,3.7-0.5,9,1.5,12c1,1.5,2.2,3.1,3.8,3c1.5-0.1,2.1-1,3.9-1s2.3,1,3.9,1 c1.6,0,2.6-1.4,3.6-2.9c1.1-1.7,1.6-3.3,1.6-3.4C18.3,18.9,17.5,15.7,17.5,12.7z"></path>
                    <path d="M14.1,3.8c0.8-1,1.4-2.4,1.2-3.8c-1.2,0-2.6,0.8-3.5,1.8c-0.8,0.9-1.4,2.2-1.3,3.7C11.9,5.5,13.2,4.8,14.1,3.8z"></path>
                  </svg>
                </div>
              </div>
            </a>

            <a href="https://play.google.com/store/apps/details?id=com.golivesimulator.app" className="app-store-btn">
              <div className="app-store-content">
                <div className="app-store-text">
                  <span>Get it on</span>
                  <strong>Google Play</strong>
                </div>
                <div className="app-store-icon">
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                    <path d="M3.18,23.07c-.27-.28-.43-.72-.43-1.29V2.22c0-.57.16-1.01.43-1.29l.07-.07L14.4,11.93v.14L3.25,23.14l-.07-.07z"></path>
                    <path d="M17.9,15.65l-3.5-3.5v-.3l3.5-3.5.08.05,4.15,2.36c1.18.67,1.18,1.77,0,2.44l-4.15,2.36-.08.05z"></path>
                    <path d="M17.98,15.6l-3.58-3.58L3.18,23.07c.39.41,1.03.46,1.76.05l13.04-7.52z"></path>
                    <path d="M17.98,8.4L4.94.88C4.21.47,3.57.52,3.18.93L14.4,12.02,17.98,8.4z"></path>
                  </svg>
                </div>
              </div>
            </a>
          </div>

          <p className="cta-foot">Free to download · 4.8★ · 100K+ creators</p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
