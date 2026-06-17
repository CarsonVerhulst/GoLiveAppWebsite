import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#top" className="footer-logo">Go<span className="gradient-text">Live</span></a>
            <p className="footer-tagline">Go live. Feel famous. No pressure.</p>
            <div className="social-links">
              <a href="https://www.tiktok.com/@goliveapp" aria-label="TikTok" className="social-link" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M16.6 5.82a4.28 4.28 0 0 1-1.06-2.82h-3.09v12.4a2.59 2.59 0 1 1-2.59-2.6c.27 0 .53.04.78.12V9.66a5.7 5.7 0 0 0-.78-.06 5.7 5.7 0 1 0 5.69 5.7V8.99a7.35 7.35 0 0 0 4.3 1.38V7.3a4.3 4.3 0 0 1-3.25-1.48z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/" aria-label="Instagram" className="social-link" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h3>Get the app</h3>
              <ul>
                <li><a href="https://apps.apple.com/us/app/golive-go-live-simulator/id6504121037">App Store</a></li>
                <li><a href="https://play.google.com/store/apps/details?id=com.golivesimulator.app">Google Play</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Explore</h3>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#testimonials">Reviews</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Company</h3>
              <ul>
                <li><a href="mailto:creators@golivesimulator.com">Contact</a></li>
                <li><a href="/privacy">Privacy</a></li>
                <li><a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Go Live Simulator. All rights reserved.</p>
          <p className="footer-fine">Not affiliated with TikTok.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
