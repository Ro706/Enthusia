import React from 'react';
import './css/SITNovate.css';
import ParticlesComponent from './particles';

function SITNovate() {
  return (
    <div className="sitnovate-container">
      <ParticlesComponent id="particles" />
      <section className="about">
        <img src="./image/SIT_NGPR_1.png" alt="SIT Logo" className="logo" />
        <h1 className="title">SITNovate 2025</h1>
        <p className="subtitle">A Great Fundraising Opportunity to Showcase Your Talent</p>
        <img src="/image/sitNovet.png" alt="SITNovate POSTER" className='image_SITNovate'/>
        <div className="details">
          <p><strong>Date:</strong> 19th Feb, 2025</p>
          {/* <p><strong>Eligibility:</strong> </p> */}
        </div>
        <div className="description">
          <h2>About the Event</h2>
          <p>
          <b>SITNovate</b> is an exhilarating 24-hour hackathon crafted to push the boundaries of creativity, innovation, and technical prowess. Designed for teams of three, this event provides a platform for participants to ideate, code, and build groundbreaking projects in a vibrant and competitive environment.
Throughout the hackathon, participants will benefit from mentorship sessions, hands-on workshops, and access to essential resources, fostering both learning and collaboration. It's an excellent opportunity to not only showcase your skills but also to network with like-minded individuals and industry experts.
With exciting prizes up for grabs, <b>SITNovate</b> is the ultimate arena for coding enthusiasts, design aficionados, and problem-solvers to unleash their potential. Whether you're a seasoned developer or just starting out, <b>SITNovate</b> promises a memorable journey of innovation, teamwork, and discovery!
          </p>
        </div>
        <button className="Register"  onClick={() => window.open("https://github.com/Ro706", "_blank")}>Register Now</button>
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
            <img src="https://cdn-icons-png.flaticon.com/512/2344/2344491.png" alt="Online Mentoring" />
            Online Mentoring
          </button>
        </div>
          <p className="timing">Exact timings of the event will be published here soon.</p>
        </div>
        <div className="contact">
          {/* <p><strong>Contact persons:</strong> <span style={{color:"#949090"}}> M - 9960225056 , Mr.Tanay Kothari M - 9975578363</span></p> */}
        </div>
      </section>
      <footer className="footer">
        <p className='text-center'>&copy; 2025 Enthusia. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default SITNovate;
