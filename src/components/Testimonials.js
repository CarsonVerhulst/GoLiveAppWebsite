import React, { useState, useEffect } from 'react';
import './Testimonials.css';
import { ThemeColors } from '../themeColors';

const Testimonials = ({ removeStats = false }) => {
  const testimonials = [
    {
      quote: "This app completely transformed how I practice for my live streams! The simulated environment feels so real.",
      author: "Jessica K.",
      role: "Content Creator",
      avatar: "/api/placeholder/60/60"
    },
    {
      quote: "I used to get so nervous before going live, but Go Live simulator helped me build confidence before facing a real audience.",
      author: "Marcus T.",
      role: "Aspiring Influencer",
      avatar: "/api/placeholder/60/60"
    },
    {
      quote: "The realistic comments and viewer count make it feel like I'm actually trending! Perfect practice tool.",
      author: "Aisha R.",
      role: "TikTok Creator",
      avatar: "/api/placeholder/60/60"
    },
    {
      quote: "I've tried other simulators but nothing comes close to the authentic experience that Go Live provides.",
      author: "Devon J.",
      role: "Digital Content Specialist",
      avatar: "/api/placeholder/60/60"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleDotClick = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <h2>User <span className="gradient-text">Testimonials</span></h2>
        <p className="section-subtitle">See what our users are saying about their experience with Go Live</p>
        
        <div className="testimonials-carousel">
          <div className="testimonials-wrapper" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-content">
                  <div className="quote-icon">"</div>
                  <p className="testimonial-quote">{testimonial.quote}</p>
                  <div className="testimonial-author">
                    <img src={testimonial.avatar} alt={testimonial.author} className="author-avatar" />
                    <div className="author-info">
                      <h4>{testimonial.author}</h4>
                      <p>{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button 
                key={index} 
                className={`dot ${currentTestimonial === index ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
                aria-label={`View testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
        
        {!removeStats && (
          <div className="app-stats">
            <div className="stat-item">
              <div className="stat-number">100K+</div>
              <div className="stat-label">Downloads</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4.8</div>
              <div className="stat-label">App Store Rating</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">30M+</div>
              <div className="stat-label">Simulated Lives</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;