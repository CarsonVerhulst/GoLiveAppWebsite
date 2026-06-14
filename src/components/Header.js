import React, { useState, useEffect } from 'react';
import './Header.css';
import { ThemeColors } from '../themeColors';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <span className="logo-text">Go<span style={{ color: ThemeColors.accentRed }}>Live</span></span>
        </div>

        <div className={`nav-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`nav ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#features" onClick={() => setMenuOpen(false)}>Features</a></li>
            <li><a href="#testimonials" onClick={() => setMenuOpen(false)}>Reviews</a></li>
            <li><a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
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