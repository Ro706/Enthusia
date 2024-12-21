import React from 'react';
import ParticlesComponent from './particles';// Import ParticlesComponent for background
import './css/sponsor.css'; // Import CSS for styling

export default function Sponsor() {
  return (
    <div className="sponsor-page">
      <ParticlesComponent id="particles" />
      <header className="sponsor-header">
        <h1 className="text-center">Sponsors</h1>
        <p className="text-center">
          We proudly acknowledge and thank all our sponsors for their invaluable support in making Enthusia 2024 a grand success!
        </p>
      </header>

      <section className="sponsor-category">
        <h2 className="text-center">Title Sponsor</h2>
        <div className="logo-grid">
          <div className="sponsor-box">1</div>
        </div>
      </section>

      <section className="sponsor-category">
        <h2 className="text-center">Co-Sponsors</h2>
        <div className="logo-grid">
          <div className="sponsor-box">2</div>
          <div className="sponsor-box">2</div>
        </div>
      </section>

      <section className="sponsor-category">
        <h2 className="text-center">Travel Partner</h2>
        <div className="logo-grid">
          <div className="sponsor-box">1</div>
        </div>
      </section>

      <section className="sponsor-category">
        <h2 className="text-center">Media Partners</h2>
        <div className="logo-grid">
          <div className="sponsor-box">3</div>
          <div className="sponsor-box">3</div>
          <div className="sponsor-box">3</div>
        </div>
      </section>

      <section className="sponsor-category">
        <h2 className="text-center">Event Sponsors</h2>
        <div className="logo-grid">
          <div className="sponsor-box">3</div>
          <div className="sponsor-box">3</div>
          <div className="sponsor-box">3</div>
        </div>
      </section>

      <section className="sponsor-category">
        <h2 className="text-center">Sponsors</h2>
        <div className="logo-grid">
          {Array.from({ length: 20 }).map((_, index) => (
            <div className="sponsor-box" key={index}>{index + 1}</div>
          ))}
        </div>
      </section>
    </div>
  );
}
