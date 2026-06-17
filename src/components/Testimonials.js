import React from 'react';
import './Testimonials.css';

const REVIEWS = [
  { name: 'Jess', handle: '@jessonlive', text: 'I practice every morning before my real streams now. My confidence is unreal.', tint: 'a' },
  { name: 'Marcus', handle: '@marcus.tv', text: 'used to freeze up on camera. this fixed it lowkey 😭 and the fake fans are hilarious', tint: 'b' },
  { name: 'Aisha', handle: '@aishar', text: 'the hearts and gifts rolling in feel SO real, genuinely makes my whole day lol', tint: 'c' },
  { name: 'Devon', handle: '@devonj', text: 'made a whole TikTok off my “live” and it hit 400k. nobody knew 💀', tint: 'd' },
  { name: 'Lena', handle: '@lenaloud', text: 'best $7 i ever spent. i feel famous on my lunch break', tint: 'e' },
  { name: 'Kai', handle: '@kaigoeslive', text: 'the celebrity drop-in bit is elite content every single time', tint: 'f' },
];

const Testimonials = () => (
  <section id="testimonials" className="testimonials-section">
    <div className="container">
      <div className="section-head">
        <span className="eyebrow">Reviews</span>
        <h2>The chat <span className="gradient-text">doesn’t lie</span></h2>
        <p className="section-subtitle">100K+ creators are already going (fake) viral. Here’s what the comments say.</p>
      </div>

      <div className="chat-wall">
        {REVIEWS.map((r, i) => (
          <div className={`chat-card tint-${r.tint}`} key={i}>
            <div className="chat-top">
              <div className="chat-avatar">{r.name[0]}</div>
              <div className="chat-id">
                <span className="chat-name">{r.name}</span>
                <span className="chat-handle">{r.handle}</span>
              </div>
              <div className="chat-stars">★★★★★</div>
            </div>
            <p className="chat-text">{r.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
