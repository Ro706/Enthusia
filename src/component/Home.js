import React, { useState, useEffect } from 'react';
import ParticlesComponent from './particles';
import { motion } from "framer-motion";
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
    const eventDate = new Date("2025-02-20T014:00:00"); // Set your event date here
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
       <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    ></motion.div>
         <motion.h1
        className="text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Enthusia 4.0
      </motion.h1>
      <hr />
      <div className="container">
        <div className="row">
          {/* Left Column - About Enthusia */}
          <motion.div
            className="col-md-6"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
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
            </motion.div>

          {/* Right Column - YouTube Video */}
          <motion.div
            className="col-md-6"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
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
          </motion.div>
        </div>
      </div>
      <motion.div className='container d-flex justify-content-center'
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      >
      <img src="./image/Enthusia.png" alt="poster" style={{
        top: "10px", 
        width: "90%",
        height: "30%",
      }}
      loading='lazy'/>

      </motion.div>
      {/* Timer Section */}
      <section className="timer">
  <motion.h2
    className="text-center"
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
    Countdown to Enthusia
  </motion.h2>
  <div className="timer-display">
    <div className="time-item">
      <span className="time-number">{timeLeft.days || 0}</span>
      <span className="time-label">Days</span>
    </div>
    <span className='pb-5'>:</span>
    <div className="time-item">
      <span className="time-number">{timeLeft.hours || 0}</span>
      <span className="time-label">Hours</span>
    </div>
    <span className='pb-5'>:</span>
    <div className="time-item">
      <span className="time-number">{timeLeft.minutes || 0}</span>
      <span className="time-label">Minutes</span>
    </div>
    <span className='pb-5'>:</span>
    <div className="time-item">
      <span className="time-number">{timeLeft.seconds || 0}</span>
      <span className="time-label">Seconds</span>
    </div>
  </div>
</section>


      {/* Sponsors Section */}
      {/* <section className="sponsor">
      <motion.div
          className="marquee"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
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
      </motion.div>
      </section> */}


      {/* Events Section */}
      <section className="events">
        <h2 className="text-center text-decoration-underline">Events</h2>
        <img src="./image/ENTHUSIA4TECHNICAL.png" alt="" className="Event" style={{
          width: "70%",
          height: "40%",
          objectFit: "contain",
          margin: "auto",
          display: "block",
          alignItems: "center",
          justifyContent: "center"
        }}/>
        <div className="row">
          <Events />
        </div>
      </section>
<section className="last">
  <h2 className="text-center text-decoration-underline">Last Year's Highlights</h2>
  <div class="containers responsive"> 
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
<section className="gallery responsive">
  <h2 className="text-center text-decoration-underline">Gallery</h2>
  <div className="gallery-container">
    <img 
      src="/image/p1.JPG" 
      alt="GalleryImage1" 
      className="image"
       loading="lazy"
    />
    <img 
      src="/image/p2.JPG" 
      alt="GalleryImage2" 
      className="image"
       loading="lazy"
    />
    <img 
      src="/image/p3.JPG" 
      alt="GalleryImage3" 
      className="image"
        loading="lazy"
    />
    <img 
      src="/image/p4.JPG" 
      alt="GalleryImage4" 
      className="image"
       loading="lazy"
    />
    <img 
      src="/image/p5.JPG" 
      alt="GalleryImage5" 
      className="image"
       loading="lazy"
    />
    <img 
      src="/image/p6.JPG" 
      alt="GalleryImage6" 
      className="image"
       loading="lazy"
    />
    <img 
      src="/image/p7.JPG"  
      alt="GalleryImage7" 
      className="image"
       loading="lazy"
    />
    <img 
      src="/image/p8.JPG" 
      alt="GalleryImage8" 
      className="image"
       loading="lazy"
    />
    <img 
      src="/image/p9.JPG" 
      alt="GalleryImage9" 
      className="image"
       loading="lazy"
    />
    <img 
      src="/image/p10.jpg" 
      alt="GalleryImage10" 
      className="image"
       loading="lazy"
    />
  </div>
</section>

<footer className="footer">
        <p className='text-center'>&copy; 2025 Enthusia. All rights reserved.</p>
</footer>
    </div>
  );
}
