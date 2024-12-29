import React from 'react';
import ParticlesComponent from './particles'; // Import ParticlesComponent for background
import './css/sponsor.css'; // Import CSS for styling

export default function Sponsor() {
  // Array of sponsor data
  const sponsors = [
    { name: "Title Sponsor", imgSrc: "https://thumbs.dreamstime.com/b/sponsor-stamp-white-sponsor-stamp-white-background-sign-label-sticker-124218259.jpg" },
    { name: "Co-Sponsor 1", imgSrc: "https://thumbs.dreamstime.com/b/sponsor-stamp-white-sponsor-stamp-white-background-sign-label-sticker-124218259.jpg" },
    { name: "Co-Sponsor 2", imgSrc: "https://thumbs.dreamstime.com/b/sponsor-stamp-white-sponsor-stamp-white-background-sign-label-sticker-124218259.jpg" },
    { name: "Travel Partner", imgSrc: "https://thumbs.dreamstime.com/b/sponsor-stamp-white-sponsor-stamp-white-background-sign-label-sticker-124218259.jpg" },
    { name: "Media Partner 1", imgSrc: "https://thumbs.dreamstime.com/b/sponsor-stamp-white-sponsor-stamp-white-background-sign-label-sticker-124218259.jpg" },
    { name: "Media Partner 2", imgSrc: "https://thumbs.dreamstime.com/b/sponsor-stamp-white-sponsor-stamp-white-background-sign-label-sticker-124218259.jpg" },
    { name: "Media Partner 3", imgSrc: "https://thumbs.dreamstime.com/b/sponsor-stamp-white-sponsor-stamp-white-background-sign-label-sticker-124218259.jpg" },
    { name: "Event Sponsor 1", imgSrc: "https://thumbs.dreamstime.com/b/sponsor-stamp-white-sponsor-stamp-white-background-sign-label-sticker-124218259.jpg" },
    { name: "Event Sponsor 2", imgSrc: "https://thumbs.dreamstime.com/b/sponsor-stamp-white-sponsor-stamp-white-background-sign-label-sticker-124218259.jpg" },
    { name: "Event Sponsor 3", imgSrc: "https://thumbs.dreamstime.com/b/sponsor-stamp-white-sponsor-stamp-white-background-sign-label-sticker-124218259.jpg" },
    // Repeat the above array items for more sponsors (up to 20 as per your requirement)
  ];

  return (
    <div className="sponsor-page">
      <ParticlesComponent id="particles" />
      <header className="sponsor-header">
        <h1 className="text-center">Sponsors</h1>
        <p className="text-center">
          We proudly acknowledge and thank all our sponsors for their invaluable support in making Enthusia 2024 a grand success!
        </p>
      </header>

      {/* Title Sponsor Section */}
      <section className="sponsor-category">
        <h2 className="text-center">Title Sponsor</h2>
        <div className="logo-grid">
          {sponsors.slice(0, 1).map((sponsor, index) => (
            <div className="sponsor-box" key={index}>
              <img 
                src={sponsor.imgSrc} 
                alt={sponsor.name} 
                className="sponsor-logo" 
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Co-Sponsors Section */}
      <section className="sponsor-category">
        <h2 className="text-center">Co-Sponsors</h2>
        <div className="logo-grid">
          {sponsors.slice(1, 3).map((sponsor, index) => (
            <div className="sponsor-box" key={index}>
              <img 
                src={sponsor.imgSrc} 
                alt={sponsor.name} 
                className="sponsor-logo" 
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Travel Partner Section */}
      <section className="sponsor-category">
        <h2 className="text-center">Travel Partner</h2>
        <div className="logo-grid">
          {sponsors.slice(3, 4).map((sponsor, index) => (
            <div className="sponsor-box" key={index}>
              <img 
                src={sponsor.imgSrc} 
                alt={sponsor.name} 
                className="sponsor-logo" 
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Media Partners Section */}
      <section className="sponsor-category">
        <h2 className="text-center">Media Partners</h2>
        <div className="logo-grid">
          {sponsors.slice(4, 7).map((sponsor, index) => (
            <div className="sponsor-box" key={index}>
              <img 
                src={sponsor.imgSrc} 
                alt={sponsor.name} 
                className="sponsor-logo" 
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Event Sponsors Section */}
      <section className="sponsor-category">
        <h2 className="text-center">Event Sponsors</h2>
        <div className="logo-grid">
          {sponsors.slice(7, 10).map((sponsor, index) => (
            <div className="sponsor-box" key={index}>
              <img 
                src={sponsor.imgSrc} 
                alt={sponsor.name} 
                className="sponsor-logo" 
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* All Sponsors Section */}
      <section className="sponsor-category">
        <h2 className="text-center">Other Sponsors</h2>
        <div className="logo-grid">
          {sponsors.slice(10).map((sponsor, index) => (
            <div className="sponsor-box" key={`sponsor-${index}`}>
              <img 
                src={sponsor.imgSrc} 
                alt={`Sponsor ${index + 1}`} 
                className="sponsor-logo" 
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
