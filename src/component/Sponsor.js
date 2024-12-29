import React from 'react';
import ParticlesComponent from './particles'; // Import ParticlesComponent for background
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
          <div className="sponsor-box">
            <img 
              src="https://media.istockphoto.com/vectors/rubber-stamp-with-sponsor-concept-vector-id995710774?k=20&m=995710774&s=612x612&w=0&h=D6PJftdsm2xftnYV8YmZhxLkV5QEfWICaJ_EF1dddW8="
              alt="Title Sponsor" 
              className="sponsor-logo" 
            />
          </div>
        </div>
      </section>

      <section className="sponsor-category">
        <h2 className="text-center">Co-Sponsors</h2>
        <div className="logo-grid">
          <div className="sponsor-box">
            <img 
              src="https://media.istockphoto.com/vectors/rubber-stamp-with-sponsor-concept-vector-id995710774?k=20&m=995710774&s=612x612&w=0&h=D6PJftdsm2xftnYV8YmZhxLkV5QEfWICaJ_EF1dddW8="
              alt="Co-Sponsor 1" 
              className="sponsor-logo" 
            />
          </div>
          <div className="sponsor-box">
            <img 
              src="https://media.istockphoto.com/vectors/rubber-stamp-with-sponsor-concept-vector-id995710774?k=20&m=995710774&s=612x612&w=0&h=D6PJftdsm2xftnYV8YmZhxLkV5QEfWICaJ_EF1dddW8="
              alt="Co-Sponsor 2" 
              className="sponsor-logo" 
            />
          </div>
        </div>
      </section>

      <section className="sponsor-category">
        <h2 className="text-center">Travel Partner</h2>
        <div className="logo-grid">
          <div className="sponsor-box">
            <img 
              src="https://media.istockphoto.com/vectors/rubber-stamp-with-sponsor-concept-vector-id995710774?k=20&m=995710774&s=612x612&w=0&h=D6PJftdsm2xftnYV8YmZhxLkV5QEfWICaJ_EF1dddW8="
              alt="Travel Partner" 
              className="sponsor-logo" 
            />
          </div>
        </div>
      </section>

      <section className="sponsor-category">
        <h2 className="text-center">Media Partners</h2>
        <div className="logo-grid">
          <div className="sponsor-box">
            <img 
              src="https://media.istockphoto.com/vectors/rubber-stamp-with-sponsor-concept-vector-id995710774?k=20&m=995710774&s=612x612&w=0&h=D6PJftdsm2xftnYV8YmZhxLkV5QEfWICaJ_EF1dddW8="
              alt="Media Partner 1" 
              className="sponsor-logo" 
            />
          </div>
          <div className="sponsor-box">
            <img 
              src="https://media.istockphoto.com/vectors/rubber-stamp-with-sponsor-concept-vector-id995710774?k=20&m=995710774&s=612x612&w=0&h=D6PJftdsm2xftnYV8YmZhxLkV5QEfWICaJ_EF1dddW8="
              alt="Media Partner 2" 
              className="sponsor-logo" 
            />
          </div>
          <div className="sponsor-box">
            <img 
              src="https://media.istockphoto.com/vectors/rubber-stamp-with-sponsor-concept-vector-id995710774?k=20&m=995710774&s=612x612&w=0&h=D6PJftdsm2xftnYV8YmZhxLkV5QEfWICaJ_EF1dddW8="
              alt="Media Partner 3" 
              className="sponsor-logo" 
            />
          </div>
        </div>
      </section>

      <section className="sponsor-category">
        <h2 className="text-center">Event Sponsors</h2>
        <div className="logo-grid">
          <div className="sponsor-box">
            <img 
              src="https://media.istockphoto.com/vectors/rubber-stamp-with-sponsor-concept-vector-id995710774?k=20&m=995710774&s=612x612&w=0&h=D6PJftdsm2xftnYV8YmZhxLkV5QEfWICaJ_EF1dddW8="
              alt="Event Sponsor 1" 
              className="sponsor-logo" 
            />
          </div>
          <div className="sponsor-box">
            <img 
              src="https://media.istockphoto.com/vectors/rubber-stamp-with-sponsor-concept-vector-id995710774?k=20&m=995710774&s=612x612&w=0&h=D6PJftdsm2xftnYV8YmZhxLkV5QEfWICaJ_EF1dddW8="
              alt="Event Sponsor 2" 
              className="sponsor-logo" 
            />
          </div>
          <div className="sponsor-box">
            <img 
              src="https://media.istockphoto.com/vectors/rubber-stamp-with-sponsor-concept-vector-id995710774?k=20&m=995710774&s=612x612&w=0&h=D6PJftdsm2xftnYV8YmZhxLkV5QEfWICaJ_EF1dddW8="
              alt="Event Sponsor 3" 
              className="sponsor-logo" 
            />
          </div>
        </div>
      </section>

      <section className="sponsor-category">
        <h2 className="text-center">Sponsors</h2>
        <div className="logo-grid">
          {Array.from({ length: 20 }).map((_, index) => (
            <div className="sponsor-box" key={index}>
              <img 
                src="https://media.istockphoto.com/vectors/rubber-stamp-with-sponsor-concept-vector-id995710774?k=20&m=995710774&s=612x612&w=0&h=D6PJftdsm2xftnYV8YmZhxLkV5QEfWICaJ_EF1dddW8="
                alt={`Sponsor ${index + 1}`} 
                className="sponsor-logo"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
