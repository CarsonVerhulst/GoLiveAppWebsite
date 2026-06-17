import React from 'react';
import './App.css';
import Header from './components/Header';
import PhonePreview from './components/PhonePreview';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

// floating hearts that drift up out of the phone into the hero
const HEARTS = [
  { left: '46%', size: 20, delay: '0s' },
  { left: '58%', size: 30, delay: '1.1s' },
  { left: '67%', size: 18, delay: '2.4s' },
  { left: '52%', size: 26, delay: '3.3s' },
  { left: '72%', size: 22, delay: '0.7s' },
  { left: '61%', size: 16, delay: '4.2s' },
  { left: '78%', size: 28, delay: '2.0s' },
  { left: '50%', size: 14, delay: '5.1s' },
];

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section className="hero-section">
          <div className="hero-glow" aria-hidden="true"></div>
          <div className="hearts" aria-hidden="true">
            {HEARTS.map((h, i) => (
              <span
                key={i}
                className="heart-p"
                style={{ left: h.left, fontSize: `${h.size}px`, animationDelay: h.delay }}
              >
                ♥
              </span>
            ))}
          </div>

          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <h1>Go live.<br />Feel <span className="gradient-text">famous.</span></h1>
                <p className="hero-sub">
                  The second you go live, a crowd of AI fans floods your chat, sends gifts,
                  and hypes you up. Practice your streaming, kill the camera nerves, or
                  just soak in some fake fame.
                </p>
                <div className="cta-buttons">
                  <a href="https://apps.apple.com/us/app/golive-go-live-simulator/id6504121037" className="download-btn primary">Download on App Store</a>
                  <a href="https://play.google.com/store/apps/details?id=com.golivesimulator.app" className="download-btn play">Get it on Google Play</a>
                  <a href="#features" className="learn-more-btn">See how it works</a>
                </div>
                <div className="hero-trust">
                  <span className="stars">★★★★★</span> 4.8 rating · loved by 100K+ creators
                </div>
              </div>

              <div className="hero-phone">
                <PhonePreview videoSrc="landingPage.mp4" />
              </div>
            </div>

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
                <div className="stat-label">Lives Simulated</div>
              </div>
            </div>
          </div>
        </section>

        <Features />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;
