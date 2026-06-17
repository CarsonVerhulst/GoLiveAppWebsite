import React from 'react';
import './Features.css';

const ROWS = [
  {
    eyebrow: 'AI audience',
    title: 'Your fans never stop hyping you',
    body: 'Go live and a full chat of AI fans pours in — reacting to you in real time, gassing you up, and keeping the energy high so it feels exactly like a viral session.',
    points: ['Real-time AI comments', 'Reacts to what you do', 'Always a packed room'],
    shot: '/screens/fans.png',
  },
  {
    eyebrow: 'Real live UI',
    title: 'It feels exactly like the real thing',
    body: 'Viewer count, LIVE badge, the comment feed, the controls — every detail mirrors a real stream, so the moment you hit go live it just feels authentic.',
    points: ['True-to-life live layout', 'Climbing viewer count', 'Comments rolling in'],
    shot: '/screens/gifts.png',
  },
  {
    eyebrow: 'Practice mode',
    title: 'Beat the nerves, zero pressure',
    body: 'Camera-shy? Rehearse going live with an audience that can’t judge you. Build real confidence and find your flow before you ever stream for an actual crowd.',
    points: ['Private, safe practice', 'Build on-camera confidence', 'No real audience, no stakes'],
    shot: '/screens/practice.png',
  },
];

const MINI = [
  { title: 'Live viewer count', body: 'Watch your numbers climb in real time as the room fills up.' },
  { title: 'Celebrity drop-ins', body: 'A big name “joins” your live for the perfect bit of content.' },
  { title: 'Filters & effects', body: 'Look the part with a full set of live filters and effects.' },
];

const Features = () => (
  <section id="features" className="features-section">
    <div className="container">
      <div className="section-head">
        <span className="eyebrow">Features</span>
        <h2>Everything you need to <span className="gradient-text">go viral</span></h2>
        <p className="section-subtitle">A full live-stream experience in your pocket — without the pressure of a real audience watching.</p>
      </div>

      {ROWS.map((r, i) => (
        <div className={`feature-row ${i % 2 ? 'reverse' : ''}`} key={i}>
          <div className="feature-shot">
            <div className="shot-frame">
              <img className="shot-img" src={`${process.env.PUBLIC_URL}${r.shot}`} alt={r.title} loading="lazy" />
            </div>
          </div>
          <div className="feature-copy">
            <span className="eyebrow">{r.eyebrow}</span>
            <h3>{r.title}</h3>
            <p>{r.body}</p>
            <ul>
              {r.points.map((p, j) => <li key={j}>{p}</li>)}
            </ul>
          </div>
        </div>
      ))}

      <div className="mini-grid">
        {MINI.map((m, i) => (
          <div className="mini-card" key={i}>
            <h4>{m.title}</h4>
            <p>{m.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
