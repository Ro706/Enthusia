import React from 'react'; 
import ParticlesComponent from './particles';
import './css/about.css'; // Import CSS file

export default function About() {
  return (
    <div className="About">
      <ParticlesComponent id="particles" />
      <section id="home">
        <div className="video">
          <video 
            width="100%" 
            muted 
            autoPlay 
            loop
            playsInline
          >
            <source src="https://sitnagpur.edu.in/images/video.m4v" type="video/mp4" />
          </video>
        </div>
      </section>
      <section id="about-college">
        <h1>About Symbiosis Institute of Technology, Nagpur</h1>
        <p>
          Symbiosis Institute of Technology, Nagpur, is a premier institution known for its excellence in education, innovation, and research. 
          Established under the umbrella of Symbiosis International University, the institute offers a vibrant campus, state-of-the-art facilities, 
          and a curriculum designed to equip students with the skills required to excel in the ever-evolving tech industry. 
          With a commitment to fostering critical thinking, problem-solving, and ethical values, SIT Nagpur creates a nurturing environment 
          for students to thrive academically and personally.
        </p>
    </section>
    <img src="./image/SIT.png" alt="SIT" className="image"/>
    <section id="about-vision">
        <p>
          The institute is dedicated to preparing students for a dynamic and globalized world through a blend of theoretical knowledge 
          and practical exposure. By encouraging participation in hackathons, industry projects, and research initiatives, SIT Nagpur stands 
          as a beacon of quality education and innovation.
        </p>
      </section>

      <footer className="footer">
        <p className='text-center fs-3'>&copy; 2025 Enthusia. All rights reserved.</p>
</footer>
    </div>
  );
}
