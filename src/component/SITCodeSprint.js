import React from 'react'
import './css/SITCodeSprint.css'; // CSS for styling
import ParticlesComponent from './particles'; // Import ParticlesComponent for background
function SITCodeSprint() {
  return (
    <div className="SITCodeSprin-container">
      <ParticlesComponent id="particles" />
      <section className="about">
        <img src="./image/SIT_NGPR_1.png" alt="SIT Logo" className="logo" />
        <h1 className="title">SITCodeSprin 2025</h1>
        <p className="subtitle">A Great Fundraising Opportunity to Showcase Your Talent</p>
        <img src="/image/compii.jpg" alt="SITCodeSprin POSTER" className='image_SITank'/>
        <div className="details">
          <p><strong>Date:</strong> 21st Feb, 2025</p>
          {/* <p><strong>Eligibility:</strong> </p> */}
        </div>
        <div className="description">
          <h2>About the Event</h2>
          <p>
          The stage is set. The clock is ticking. The ultimate battle of logic and precision is about to begin. Welcome to <b>SITCodeSprint</b>, the arena where brilliance meets determination, and every second is a chance to prove your mettle.  
<b>SITCodeSprint</b> is not just a competition—it’s a journey that pushes you to your limits and unlocks your true potential. Coders from all years will converge in a thrilling battle of minds, taking on real-world challenges designed to test more than just coding skills. Here, creativity meets logic, and speed is as crucial as accuracy.  
The competition unfolds in <b>three intense rounds</b>, each more demanding than the last. Every round is a new test of your ingenuity, problem-solving skills, and your ability to thrive under pressure. With each challenge you conquer, the stakes climb higher, the tension grows thicker, and your determination is put to the ultimate test.  
The journey culminates in the <b>final showdown</b>—a stage reserved for the best of the best. This is where legends are forged, and every decision, every line of code, every second counts. It's not just about solving problems; it’s about rising above the rest, proving your grit, and leaving a mark as a true champion.  
But <b>SITCodeSprint</b> is more than a competition—it’s an opportunity to learn, grow, and connect with like-minded individuals. Whether you're a beginner or a seasoned coder, the experience will ignite your passion for problem-solving and innovation. Guided by mentors and inspired by peers, this is your chance to elevate your skills to new heights.  
So, are you ready to take on the ultimate challenge? Are you prepared to test your logic, precision, and creativity like never before?<b>This is no ordinary competition. This is SITCodeSprint</b>. The countdown has begun—seize your moment, rise to the occasion, and claim your place in coding history!
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
            <img src="https://cdn-icons-png.flaticon.com/512/2344/2344491.png" alt="Online Monitoring" />
            Online Monitoring
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
  )
}

export default SITCodeSprint
