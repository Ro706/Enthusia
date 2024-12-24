import React, { useState } from 'react';
import ParticlesComponent from './particles';
import SIT from './image/SIT.png'; // Correct way to import a default export
import './css/about.css'; // Import CSS file

export default function About() {
  const [isReadMore, setIsReadMore] = useState(false);

  const handleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className="About">
      <ParticlesComponent id="particles" />
      <section id="home">
        <div className="video">
          <video width="100%" muted autoPlay loop playsInline>
            <source src="https://sitnagpur.edu.in/images/video.m4v" type="video/mp4" />
          </video>
        </div>
      </section>
      <div className="container">
        <div className="row">
          {/* Left Column - About SIT */}
          <div className="col-md-6">
            <h2 className="text-decoration-underline">About SIT</h2>
            <p className={`about-text ${isReadMore ? 'expanded' : ''}`}>
              Enthusia, the annual fest of Symbiosis Institute of Technology (SIT) Nagpur, celebrates innovation, creativity, and engineering excellence. Since its establishment in 2021, SIT Nagpur has emerged as a hub of dynamism and educational brilliance, and Enthusia embodies these values through a blend of technical expertise, cultural vibrancy, and spirited competition. This year’s Enthusia features three flagship events: a high-energy Hackathon to solve real-world problems, a Tech Expo showcasing innovative projects and research, and a Cultural Night filled with captivating performances. With interactive workshops, exciting competitions, and opportunities to learn and network, Enthusia 2024 promises to inspire and create lasting memories for all participants.
              {isReadMore && (
                <span>
                  The event is expected to have a wide variety of exciting workshops and hands-on experiences for all attendees. Enthusia aims to engage students, professionals, and technologists to showcase the power of collaboration, innovation, and cutting-edge technology in today's world.
                </span>
              )}
            </p>
            <button className="btn btn-link" onClick={handleReadMore}>
              {isReadMore ? 'Read Less' : 'Read More'}
            </button>
          </div>

          {/* Right Column - YouTube Video */}
          <div className="col-md-6">
            <div className="embed-responsive embed-responsive-16by9">
            <img src={SIT} alt="SIT" className="embed-responsive-item" />
            </div>
          </div>
        </div>
      </div>
      <section id="about-college">
        {/* <h1>About Symbiosis Institute of Technology, Nagpur</h1> */}
        <p>
          Symbiosis Institute of Technology, Nagpur, is a premier institution known for its excellence in education, innovation, and research. 
          Established under the umbrella of Symbiosis International University, the institute offers a vibrant campus, state-of-the-art facilities, 
          and a curriculum designed to equip students with the skills required to excel in the ever-evolving tech industry. 
          With a commitment to fostering critical thinking, problem-solving, and ethical values, SIT Nagpur creates a nurturing environment 
          for students to thrive academically and personally.
        </p>
      </section>
      <section id="about-vision">
        <p>
          The institute is dedicated to preparing students for a dynamic and globalized world through a blend of theoretical knowledge 
          and practical exposure. By encouraging participation in hackathons, industry projects, and research initiatives, SIT Nagpur stands 
          as a beacon of quality education and innovation.
        </p>
      </section>
      <footer className="footer">
        <p className="text-center fs-3">&copy; 2025 Enthusia. All rights reserved.</p>
      </footer>
    </div>
  );
}
