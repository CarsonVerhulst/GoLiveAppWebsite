import React from 'react';
import './PhonePreview.css';
import { redBlueShadow } from '../themeColors';

const PhonePreview = ({ videoSrc }) => {
  return (
    <div className="phone-container">
      <div className="phone-frame" style={redBlueShadow}>
        <div className="phone-notch"></div>
        <div className="video-container">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="phone-video"
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        
        <div className="phone-home-indicator"></div>
      </div>
      <div className="phone-reflections"></div>
    </div>
  );
};

export default PhonePreview;