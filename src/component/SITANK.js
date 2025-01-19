import React from 'react';
import ParticlesComponent from './particles'; // Import ParticlesComponent for background
import './css/SITANK.css'; // CSS for styling

function SITANK() {
  return (
    <div>
      <ParticlesComponent id="particles" />
      <section className="about">
        <img src="./image/SIT_NGPR_1.png" alt="SIT Logo" className="logo" />
        <h1 className="title">SITank 2025</h1>
        <p className="subtitle">A Great Fundraising Opportunity for Startups</p>
        <p className="collaboration">
          In Collaboration with <br />
          <strong>Indovation Center, Western Region, Ministry of Education’s Innovation Cell</strong>
        </p>
        <div className="partners">
          <div className="partner">
           <img src="/image/Picture1.jpg" alt="Mentorship Partner" />
          </div>
          <div className="partner">
            <img src="/image/Picture2.png" alt="Incubation Partner" />
          </div>
        </div>
        <button className="register-button"  onClick={() => window.open("https://github.com/Ro706", "_blank")}>Register Now</button><br/>
        <img src="/image/SITANK.jpg" alt="SITANK POSTER" className='image_SITank'/>
        <div className="details">
          <p><strong>Date:</strong> 20th Feb, 2025</p>
          <p><strong>Eligibility:</strong> Only Startups above TRL 3 are allowed.</p>
        </div>
        <div className="description">
          <h2>About the Event</h2>
          <p>
            SITank 2025 is a dynamic Pitch Deck competition organized by the E-Cell of 
            Symbiosis Institute of Technology, Nagpur aimed at providing startups with a 
            platform to present their innovative ideas to potential investors. This event offers 
            entrepreneurs the unique opportunity to gain exposure, secure funding, and receive 
            invaluable mentorship from industry leaders. By connecting startups with investors, 
            mentors, and partners, SITank fosters a thriving entrepreneurial ecosystem at SIT 
            and beyond, encouraging the growth of groundbreaking businesses and empowering the 
            next generation of innovators. It’s not just a competition; it’s a gateway to 
            transforming ideas into impactful ventures.
          </p>
        </div>
        <div className="highlights">
          <h2>Key Highlights of the Event</h2>
          <div className="button-list">
          <button className="highlight-button">
            <img src="https://www.pngall.com/wp-content/uploads/5/Investment-PNG-Free-Image.png" alt="Investment Opportunity" />
            Investment Opportunity
          </button>
          <button className="highlight-button">
            <img src="https://planify-main.s3.amazonaws.com/media/images/documents/Seed_funding-01_1.png" alt="Potential Seed Funding" />
            Potential Seed Funding
          </button>
          <button className="highlight-button">
            <img src="https://static.vecteezy.com/system/resources/previews/021/666/207/original/3d-trophy-cup-with-gift-boxes-and-award-medal-winner-with-prize-and-golden-cup-3d-rendering-png.png" alt="Attractive Prizes" />
            Attractive Prizes
          </button>
          <button className="highlight-button">
            <img src="https://static.vecteezy.com/system/resources/previews/014/179/558/original/certificate-icons-design-in-blue-circle-png.png" alt="Participation Certificate" />
            Participation Certificate
          </button>
          <button className="highlight-button">
            <img src="https://cdn-icons-png.flaticon.com/512/6035/6035884.png" alt="Incubation Assistance" />
            Incubation Assistance
          </button>
          <button className="highlight-button">
            <img src="https://cdn-icons-png.flaticon.com/512/2344/2344491.png" alt="OnlineMentoring" />
            Online Mentoring
          </button>
        </div>
          <ul>
          <li>Track1: Elimination Round (Exact date and timings of the Elimination Round will be conveyed here soon.)</li>
          <li>Track2: Final Round (20th Feb, 2025).</li>
          </ul>
          <p className="timing">Exact timings of the event will be published here soon.</p>
        </div>
        <div className="contact">
          <p><strong>Contact persons:</strong> <span style={{color:"#949090"}}>Mr.Krutik Gajbhiya M - 9960225056 , Mr.Tanay Kothari M - 9975578363</span></p>
        </div>
      </section>
      <footer className="footer">
        <p className='text-center'>&copy; 2025 Enthusia. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default SITANK;
