import React, { useState, useEffect } from 'react';
import ParticlesComponent from './particles';
import  codehunt from './image/codehunt.webp';
import compii from './image/compii.jpg';
import SI_Tank from './image/SI-tank.png';
import './css/home.css';

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
    const eventDate = new Date("2025-01-19T00:00:00"); // Set your event date here
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
      <h1 className="text-center">Enthusia</h1>
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
        <marquee behavior="scroll" direction="right" scrollamount="20" scrolldelay="10">
          <div className="box">
            <h2>co-Sponsors</h2>
          </div>
          <div className="box">
            <h2>Title-Sponsors</h2>
          </div>
          <div className="box">
            <h2>co-Sponsors</h2>
          </div>
        </marquee>
      </section>

      {/* Events Section */}
      <section className="events">
  <h2 className="text-center text-decoration-underline">Events</h2>
  <div className="row justify-content-center">
    {/* Event 1 */}
    <div className="col-md-4 mb-3">
      <div className="card bg-black text-white border-1 border-white">
        <div className="card-body">
          <img 
            src={codehunt} 
            className="event-image" 
            alt="Code Hunt Event Image" 
            style={{
              width: "100%", 
              height: "200px", 
              objectFit: "cover" // Ensures image is cropped if it exceeds aspect ratio
            }} 
          />
          <h5 className="card-title mt-3">SITnnovate</h5>
          <p className="card-text fs-10">
            SITnnovate is a 24-hour hackathon that sparks creativity, innovation, and technical skills. Teams of three will brainstorm, code, and create groundbreaking projects with access to mentors, workshops, and resources. It's a chance to learn, network, and win exciting prizes. Whether you're a coding pro or a design enthusiast, SITnnovate promises an exhilarating journey of teamwork and discovery!
          </p>
          <div className="text-center">
            <button className="btn btn-primary btn-lg" onClick={() => window.location.href = "/Apply"}>Apply Now</button>
          </div>
        </div>
      </div>
    </div>

    {/* Event 2 */}
    <div className="col-md-4 mb-3">
      <div className="card bg-black text-white border-1 border-white">
        <div className="card-body">
          <img 
            src={compii} 
            className="event-image" 
            alt="Competitive Coding Event Image"
            style={{
              width: "100%", 
              height: "200px", 
              objectFit: "cover" // Ensures image is cropped if it exceeds aspect ratio
            }} 
          />
          <h5 className="card-title mt-3">SIT CodeSprint</h5>
          <p className="card-text fs-12">
            SIT CodeSprint is a competitive coding event open to all years, featuring three challenging rounds. Solve problems in Round 1 to win "Time Turns" or "Clue Cracks." Round 2 ups the difficulty, giving top teams an edge, and Round 3 pits finalists against each other for the Ultimate Champion title. Show your skills and seize the opportunity to shine!
          </p>
          <div className="text-center">
            <button className="btn btn-primary btn-lg" onClick={() => window.location.href = "/Apply"}>Apply Now</button>
          </div>
        </div>
      </div>
    </div>

    {/* Event 3 */}
    <div className="col-md-4 mb-3">
      <div className="card bg-black text-white border-1 border-white">
        <div className="card-body">
          <img 
            src={SI_Tank} 
            className="event-image" 
            alt="SI Tank Event Image"
            style={{
              width: "100%", 
              height: "200px", 
              objectFit: "cover" // Ensures image is cropped if it exceeds aspect ratio
            }} 
          />
          <h5 className="card-title mt-3">SI Tank</h5>
          <p className="card-text fs-10">
            SI-Tank is an exciting platform at Symbiosis Institute of Technology where aspiring entrepreneurs pitch their innovative ideas to a panel of experienced investors and mentors. This event fosters creativity, collaboration, and provides valuable networking opportunities. Join us to explore, invest, and grow your entrepreneurial spirit!
          </p>
          <div className="text-center">
            <button className="btn btn-primary btn-lg" onClick={() => window.location.href = "/Apply"}>Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


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
