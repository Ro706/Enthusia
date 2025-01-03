import React, { useState, useEffect } from 'react';
import ParticlesComponent from './particles';
import './css/home.css';
import Events from './event';
export default function Home() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isReadMore, setIsReadMore] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Clear the interval on component unmount
  }, []);

  function calculateTimeLeft() {
    const eventDate = new Date("2025-02-19T00:00:00"); // Set your event date here
    const currentDate = new Date();
    const difference = eventDate - currentDate;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }
    return timeLeft;
  }

  const handleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className="home">
         <ParticlesComponent id="particles" />
      <h1 className="text-center">Enthusia 4.0</h1>
      <hr />
      <div className="container">
        <div className="row">
          {/* Left Column - About Enthusia */}
          <div className="col-md-6">
            <h2 className='text-decoration-underline'>About Enthusia</h2>
            <p className={`about-text ${isReadMore ? 'expanded' : ''}`}>
              Enthusia, the annual fest of Symbiosis Institute of Technology (SIT) Nagpur, celebrates innovation, creativity, and engineering excellence. Since its establishment in 2021, SIT Nagpur has emerged as a hub of dynamism and educational brilliance, and Enthusia embodies these values through a blend of technical expertise, cultural vibrancy, and spirited competition. This year’s Enthusia features three flagship events: a high-energy Hackathon to solve real-world problems, a Tech Expo showcasing innovative projects and research, and a Cultural Night filled with captivating performances. With interactive workshops, exciting competitions, and opportunities to learn and network, Enthusia 2024 promises to inspire and create lasting memories for all participants.
              {isReadMore && (
                <span>
                  The event is expected to have a wide variety of exciting workshops and hands-on experiences for all attendees. Enthusia aims to engage students, professionals, and technologists to showcase the power of collaboration, innovation, and cutting-edge technology in today's world.
                </span>
              )}
            </p>
            {/* Read More / Read Less Toggle */}
            <button className="btn btn-link" onClick={handleReadMore}>
              {isReadMore ? 'Read Less' : 'Read More'}
            </button>
          </div>

          {/* Right Column - YouTube Video */}
          <div className="col-md-6">
            <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/-6glW3PkFIk?autoplay=1&loop=1&playlist=-6glW3PkFIk&controls=0&mute=1"
              title="Enthusia Highlights"
              allow="autoplay"
              style={{ pointerEvents: "none", width: "100%", height: "100%" }}
              allowFullScreen
            ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Timer Section */}
      <section className="timer">
        <h2 className="text-center">Countdown to Enthusia</h2>
        <div className="timer-display">
          <div className="time-item">
            <span className="time-number">{timeLeft.days || 0}</span>
            <span className="time-label">Days</span>
          </div>
          <div className="time-item">
            <span className="time-number">{timeLeft.hours || 0}</span>
            <span className="time-label">Hours</span>
          </div>
          <div className="time-item">
            <span className="time-number">{timeLeft.minutes || 0}</span>
            <span className="time-label">Minutes</span>
          </div>
          <div className="time-item">
            <span className="time-number">{timeLeft.seconds || 0}</span>
            <span className="time-label">Seconds</span>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="sponsor">
      <div className="marquee">
        <div className="marquee-content">
          <div className="box">
            <h2>co-Sponsors</h2>
          </div>
          <div className="box">
            <h2>Title-Sponsors</h2>
          </div>
          <div className="box">
            <h2>co-Sponsors</h2>
          </div>
        </div>
      </div>
      </section>


      {/* Events Section */}
      <section className="events">
        <div className="row">
          <Events />
        </div>
      </section>

{/* Gallery Section */}
<section className="gallery">
  <h2 className="text-center text-decoration-underline">Gallery</h2>
  <div className="gallery-container">
    <img 
      src="https://th.bing.com/th/id/OIP.-_PyFbSj7763esrJlk-1CwAAAA?rs=1&pid=ImgDetMain" 
      alt="Gallery Image 1" 
      className="image"
    />
    <img 
      src="https://th.bing.com/th/id/OIP.-_PyFbSj7763esrJlk-1CwAAAA?rs=1&pid=ImgDetMain" 
      alt="Gallery Image 2" 
      className="image"
    />
    <img 
      src="https://th.bing.com/th/id/OIP.-_PyFbSj7763esrJlk-1CwAAAA?rs=1&pid=ImgDetMain" 
      alt="Gallery Image 3" 
      className="image"
    />
    <img 
      src="https://th.bing.com/th/id/OIP.-_PyFbSj7763esrJlk-1CwAAAA?rs=1&pid=ImgDetMain" 
      alt="Gallery Image 4" 
      className="image"
    />
    <img 
      src="https://th.bing.com/th/id/OIP.-_PyFbSj7763esrJlk-1CwAAAA?rs=1&pid=ImgDetMain" 
      alt="Gallery Image 5" 
      className="image"
    />
    <img 
      src="https://th.bing.com/th/id/OIP.-_PyFbSj7763esrJlk-1CwAAAA?rs=1&pid=ImgDetMain" 
      alt="Gallery Image 6" 
      className="image"
    />
    <img 
      src="https://th.bing.com/th/id/OIP.-_PyFbSj7763esrJlk-1CwAAAA?rs=1&pid=ImgDetMain" 
      alt="Gallery Image 7" 
      className="image"
    />
    <img 
      src="https://th.bing.com/th/id/OIP.-_PyFbSj7763esrJlk-1CwAAAA?rs=1&pid=ImgDetMain" 
      alt="Gallery Image 8" 
      className="image"
    />
    <img 
      src="https://th.bing.com/th/id/OIP.-_PyFbSj7763esrJlk-1CwAAAA?rs=1&pid=ImgDetMain" 
      alt="Gallery Image 9" 
      className="image"
    />
    <img 
      src="https://th.bing.com/th/id/OIP.-_PyFbSj7763esrJlk-1CwAAAA?rs=1&pid=ImgDetMain" 
      alt="Gallery Image 10" 
      className="image"
    />
  </div>
</section>

<footer className="footer">
        <p className='text-center'>&copy; 2025 Enthusia. All rights reserved.</p>
</footer>
    </div>
  );
}
