import React from 'react'
import ParticlesComponent from './particles'; // Import ParticlesComponent for background
import './css/SITANK.css';   
function SITANK() {
  return (
    <div>
       <ParticlesComponent id="particles" />
       <div className="sitank-page">
      <header className="sitank-header">
        <h1>E-Cell Organizes</h1>
        <h2 className="pitch-title">A PITCH DECK COMPETITION</h2>
        <h3 className="sitank-title">SITank 2025</h3>
        <p className="subtitle">
          A Great Fundraising Opportunity for the Startups
        </p>
      </header>

      <section className="collaboration-section">
        <p>in Collaboration with
          <strong>Indovation Center</strong>, Western Region, Ministry of
          Education’s Innovation Cell and</p>
      </section>

      <section className="partners-section">
        <div className="partner-logo">
          <img
            src="./image/Picture1.jpg" // Replace with actual URL for TiE Nagpur logo
            alt="logo1"
          />
        </div>
        <div className="partner-logo">
          <img
            src="./image/Picture2.jpg" // Replace with actual URL for Incubein Foundation logo
            alt="logo2"
          />
        </div>
      </section>
      <section className="partners-section">
        <div className="partner-logo">
          <p>Mentorship Partner</p>
        </div>
        <div className="partner-logo">
          <p>Incubation Partner</p>
        </div>
      </section>
      <div className="event-details">
      <header className="register-now">
        <h1>Register Now</h1>
        <img src="/image/SITANK.jpg" className="banner-placeholder"/>
      </header>

      <section className="event-date">
        <p>
          <strong>Date:</strong> <span>21<sup>st</sup> Feb, 2025</span>
        </p>
        <p className="eligibility">Only Startups above TRL 3 are allowed.</p>
      </section>

      <section className="about-event">
        <h2>About the Event:</h2>
        <p>
          SITank 2025 is a dynamic Pitch Deck competition organized by the
          E-Cell of Symbiosis Institute of Technology, Nagpur aimed at
          providing startups with a platform to present their innovative ideas
          to potential investors. This event offers entrepreneurs the unique
          opportunity to gain exposure, secure funding, and receive invaluable
          mentorship from industry leaders. By connecting startups with
          investors, mentors, and partners, SITank fosters a thriving
          entrepreneurial ecosystem at SIT and beyond, encouraging the growth
          of groundbreaking businesses and empowering the next generation of
          innovators. It’s not just a competition; it’s a gateway to
          transforming ideas into impactful ventures.
        </p>
        <button align="center" class="button" onClick={() => window.open("https://forms.gle/5GK1a4KZ7dLw6HgE7", "_blank")}>Apply</button>
        <h3>Key Highlights of the Event:</h3>
        <p align="center">Investment opportunity | Potential seed Funding | Attractive Prizes | Participation certificate | Incubation Assistance | Online Monitoring | Monitoring & Networking opportunity Access to 3D printer Credit worth 20k
        </p>
        {/* Add bullet points or key highlights here */}
        <p align="center">Track 1: Elimination Round <br/>
Track 2: Final Round
</p>
<h3>Exact timings of the event will be published here soon.
</h3>

<p align="center">
Contact persons:Mr.Krutik Gajbhiya M-9960225056 , Mr.Tanay Kothari M-9975578363</p>
      </section>
    </div>
    </div>
    </div>
  )
}

export default SITANK

