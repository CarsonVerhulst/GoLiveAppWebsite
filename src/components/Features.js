import React from 'react';
import './Features.css';
import { ThemeColors } from '../themeColors';

const Features = () => {
  const features = [
    {
      icon: '🎬',
      title: 'Realistic Live Experience',
      description: 'Experience the thrill of going live with real-time comments, likes, and viewer count that simulates a viral TikTok session.'
    },
    {
      icon: '🔔',
      title: 'Customizable Notifications',
      description: 'Get realistic follower alerts, gift animations, and comment notifications just like on a real TikTok live stream.'
    },
    {
      icon: '🎮',
      title: 'Practice Mode',
      description: 'Perfect your live streaming skills in a safe environment before taking your talents to a real audience.'
    },
    {
      icon: '✨',
      title: 'Special Effects',
      description: 'Access a variety of filters, effects, and virtual gifts that mimic the actual TikTok live experience.'
    },
    {
      icon: '📊',
      title: 'Performance Metrics',
      description: 'Track your engagement metrics to understand what content resonates best with simulated audiences.'
    },
    {
      icon: '🔒',
      title: 'Safe Environment',
      description: 'All the excitement of going viral without the pressure of a real audience - perfect your skills before going live for real.'
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="container">
        <h2>App <span className="gradient-text">Features</span></h2>
        <p className="section-subtitle">Experience the thrill of viral fame with our simulator's powerful features</p>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                backgroundImage: `linear-gradient(135deg, rgba(${index % 2 === 0 ? '255,0,0' : '0,0,255'}, 0.05), transparent)`
              }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;