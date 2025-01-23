import React, { useState, useEffect } from 'react';
import ParticlesComponent from './particles';
import './css/home.css';
import Events from './event';
export default function Home() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isReadMore, setIsReadMore] = useState(false);
  const [loading, setLoading] = useState(true); // State for loading screen

  useEffect(() => {
    // Simulate loading by waiting for all elements to load
    const handlePageLoad = () => setLoading(false);

    if (document.readyState === 'complete') {
      handlePageLoad();
    } else {
      window.addEventListener('load', handlePageLoad);
    }

    return () => window.removeEventListener('load', handlePageLoad);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Clear the interval on component unmount
  }, []);

  function calculateTimeLeft() {
    const eventDate = new Date("2025-02-18T09:00:00"); // Set your event date here
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

  if (loading) {
    // Render loading spinner while the page is loading
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <h2>Loading...</h2>
      </div>
    );
  }

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
<section className="last">
  <h2 className="text-center text-decoration-underline">Last Year's Highlights</h2>
  <div class="containers"> 
        <iframe class="responsive-iframe" 
                src="https://www.youtube.com/embed/A3X_rpkHKIg?autoplay=1&loop=1&playlist=A3X_rpkHKIg&controls=0&mute=1" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen 
                style={{pointerEvents: "none", width: "100%", height: "100%"}}>
        </iframe>
      </div>
</section>
{/* Gallery Section */}
<section className="gallery">
  <h2 className="text-center text-decoration-underline">Gallery</h2>
  <div className="gallery-container">
    <img 
      src="/image/p1.JPG" 
      alt="GalleryImage1" 
      className="image"
    />
    <img 
      src="/image/p2.JPG" 
      alt="GalleryImage2" 
      className="image"
    />
    <img 
      src="/image/p3.JPG" 
      alt="GalleryImage3" 
      className="image"
    />
    <img 
      src="/image/p4.JPG" 
      alt="GalleryImage4" 
      className="image"
    />
    <img 
      src="/image/p5.JPG" 
      alt="GalleryImage5" 
      className="image"
    />
    <img 
      src="/image/p6.JPG" 
      alt="GalleryImage6" 
      className="image"
    />
    <img 
      src="/image/p7.JPG"  
      alt="GalleryImage7" 
      className="image"
    />
    <img 
      src="/image/p8.JPG" 
      alt="GalleryImage8" 
      className="image"
    />
    <img 
      src="/image/p9.JPG" 
      alt="GalleryImage9" 
      className="image"
    />
    <img 
      src="/image/p10.jpg" 
      alt="GalleryImage10" 
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
