import React, { useState, useEffect } from 'react';
import './css/SITCodeSprint.css'; // CSS for styling
import ParticlesComponent from './particles'; // Import ParticlesComponent for background

function SITCodeSprint() {
  const [isMobile, setIsMobile] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust based on your desired breakpoint for mobile
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDescription = () => {
    setShowFullDescription((prev) => !prev);
  };

  const shortDescription = `The stage is set. The clock is ticking. The ultimate battle of logic and precision is about to begin. Welcome to SITCodeSprint, where brilliance meets determination, and every second is a chance to prove your mettle.`;
  const fullDescription = `The stage is set. The clock is ticking. The ultimate battle of logic and precision is about to begin. Welcome to SITCodeSprint, the arena where brilliance meets determination, and every second is a chance to prove your mettle. SITCodeSprint is not just a competition—it’s a journey that pushes you to your limits and unlocks your true potential. Coders from all years will converge in a thrilling battle of minds, taking on real-world challenges designed to test more than just coding skills. Here, creativity meets logic, and speed is as crucial as accuracy. The competition unfolds in three intense rounds, each more demanding than the last. Every round is a new test of your ingenuity, problem-solving skills, and your ability to thrive under pressure. With each challenge you conquer, the stakes climb higher, the tension grows thicker, and your determination is put to the ultimate test. The journey culminates in the final showdown—a stage reserved for the best of the best. This is where legends are forged, and every decision, every line of code, every second counts. It’s not just about solving problems; it’s about rising above the rest, proving your grit, and leaving a mark as a true champion. But SITCodeSprint is more than a competition—it’s an opportunity to learn, grow, and connect with like-minded individuals. Whether you're a beginner or a seasoned coder, the experience will ignite your passion for problem-solving and innovation. Guided by mentors and inspired by peers, this is your chance to elevate your skills to new heights. So, are you ready to take on the ultimate challenge? Are you prepared to test your logic, precision, and creativity like never before? This is no ordinary competition. This is SITCodeSprint. The countdown has begun—seize your moment, rise to the occasion, and claim your place in coding history!`;

  return (
    <div className="SITCodeSprin-container">
      <ParticlesComponent id="particles" />
      <section className="about">
        <img src="./image/SIT_NGPR_1.png" alt="SIT Logo" className="logo" />
        <h1 className="title">SITCodeSprint 2025</h1>
        <p className="subtitle">A Great Fundraising Opportunity to Showcase Your Talent</p>
        <img src="/image/codeSPRINT.png" alt="SITCodeSprint POSTER" className='image_SITCodeSprint' />
        <div className="details">
          <p><strong>Date:</strong> 20st Feb, 2025</p>
        </div>
        <div className="description">
          <h2>About the Event</h2>
          <p>
            {isMobile && !showFullDescription ? shortDescription : fullDescription}
          </p>
          {isMobile && (
            <button className="read-more" onClick={toggleDescription}>
              {showFullDescription ? 'Read Less' : 'Read More'}
            </button>
          )}
        </div>
        <button className="Register" onClick={() => window.open("https://forms.gle/h2dQGT2SYb4o9Zzo6", "_blank")}>Register Now</button>
        <div className="highlights">
          <h2>Key Highlights of the Event</h2>
          <div className="button-list">
            <button className="highlight-button">
              <img src="https://static.vecteezy.com/system/resources/previews/011/299/372/original/problem-solving-and-teamwork-collaboration-3d-high-quality-render-illustration-png.png" alt="Investment Opportunity" />
              Teamwork
            </button>
            <button className="highlight-button">
              <img src="https://cdn4.iconfinder.com/data/icons/digital-marketing-isometric-kick-starter/512/innovative_idea-1024.png" alt="Potential Seed Funding" />
              Innovation
            </button>
            <button className="highlight-button">
              <img src="https://www.pngall.com/wp-content/uploads/8/Running-Speed-PNG-Image.png" alt="Attractive Prizes" />
              Speed
            </button>
            <button className="highlight-button">
              <img src="https://cdn-icons-png.flaticon.com/512/6143/6143316.png" alt="Participation Certificate" />
              Competition
            </button>
            <button className="highlight-button">
              <img src="https://www.pngall.com/wp-content/uploads/5/Learning-PNG-Free-Download.png" alt="Incubation Assistance" />
              Learning
            </button>
            <button className="highlight-button">
              <img src="https://wallpapers.com/images/hd/problem-solving-process-p9uzjf1eyah41uat.png" alt="Online Mentoring" />
              Problem Solving
            </button>
          </div>
          <p className="timing">Exact timings of the event will be published here soon.</p>
        </div>
        <div className="contact"></div>
      </section>
      <footer className="footer">
        <p className='text-center'>&copy; 2025 Enthusia. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default SITCodeSprint;
