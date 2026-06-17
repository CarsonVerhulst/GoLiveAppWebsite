import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <a href="#top" className="logo">Go <span className="gradient-text">Live</span> Simulator</a>

        <div className={`nav-toggle ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </div>

        <nav className={`nav ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#features" onClick={() => setMenuOpen(false)}>Features</a></li>
            <li><a href="#testimonials" onClick={() => setMenuOpen(false)}>Reviews</a></li>
            <li className="cta-nav">
              <a href="https://apps.apple.com/us/app/golive-go-live-simulator/id6504121037" className="download-btn-nav">Download</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
