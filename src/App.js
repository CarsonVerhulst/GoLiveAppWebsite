import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import PhonePreview from './components/PhonePreview';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <h1>Experience the <span className="gradient-text">Thrill</span> of Going Live</h1>
                <div className="cta-buttons">
                  <a href="https://apps.apple.com/us/app/golive-go-live-simulator/id6504121037" className="download-btn primary">Download on App Store</a>
                  <a href="#features" className="learn-more-btn">Learn More</a>
                </div>
              </div>
              <div className="hero-phone">
                <PhonePreview videoSrc="landingPage.mp4" />
              </div>
            </div>
            
            {/* App Stats Section - MOVED OUTSIDE THE HERO CONTENT */}
            <div className="app-stats-hero">
              <div className="stat-item">
                <div className="stat-number gradient-text">100K+</div>
                <div className="stat-label">Downloads</div>
              </div>
              <div className="stat-item">
                <div className="stat-number gradient-text">4.8</div>
                <div className="stat-label">App Store Rating</div>
              </div>
              <div className="stat-item">
                <div className="stat-number gradient-text">30M+</div>
                <div className="stat-label">Simulated Lives</div>
              </div>
            </div>
          </div>
        </section>
        
        <Features />
        <Testimonials removeStats={true} />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;