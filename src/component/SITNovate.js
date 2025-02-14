import React from 'react';
import './css/SITNovate.css';
import ParticlesComponent from './particles';

function SITNovate() {
  const schedule = [
    { id: 1, date: '14-02-25', time: '11:59 PM', event: 'Registrations on Google Form and Devfolio Closed', location: 'Online' },
    { id: 2, date: '15-02-25', time: '9:00 AM', event: 'Whatsapp Group formation with all participants', location: 'Online' },
    { id: 3, date: '15-02-25', time: '12:00 PM', event: 'Posting on Whatsapp group problem tracks, rules, and guidelines, and PPT template', location: 'Online' },
    { id: 4, date: '16-02-25', time: '12:00 PM', event: 'PPT Uploading deadline', location: 'Online' },
    { id: 5, date: '16-02-25', time: '5:00 PM', event: 'Complete Evaluation of PPTs to finalize top 40 teams', location: 'Online' },
    { id: 6, date: '16-02-25', time: '6:00 PM', event: 'Whatsapp group in community for only top 40 teams', location: 'Online' },
    { id: 7, date: '16-02-25', time: '7:00 PM', event: 'Final Sheet top 40 posting on Whatsapp group', location: 'Online' },
    { id: 8, date: '16-02-25', time: '8:00 PM', event: 'Posting of undertaking (Google Form)', location: 'Online' },
    { id: 9, date: '19-02-25', time: '12:00 PM - 1:30 PM', event: 'Registration Desk and Welcome Kit', location: 'SIT Building Entrance' },
    { id: 10, date: '19-02-25', time: '1:00 PM - 1:30 PM', event: 'Report Time at S-08', location: 'S-08' },
    { id: 11, date: '19-02-25', time: '1:20 PM', event: 'Posting instructions video, rules and guidelines on Whatsapp', location: 'Online' },
    { id: 12, date: '19-02-25', time: '1:00 PM - 1:15 PM', event: 'Briefing Instructions', location: 'S-08' },
    { id: 13, date: '19-02-25', time: '1:15 PM - 1:30 PM', event: 'Inaugural Ceremony (Industry People) - HCL, GlobalLogic, Infosys, Tech Mahindra', location: 'S-08' },
    { id: 14, date: '19-02-25', time: '1:35 PM', event: 'Ribbon Cutting Ceremony', location: 'In-front of S-08' },
    { id: 15, date: '19-02-25', time: '1:40 PM - 2:00 PM', event: 'Countdown and Industry Insights', location: 'S-08' },
    { id: 16, date: '19-02-25', time: '2:00 PM', event: 'Start of Hackathon', location: 'S-08' },
    { id: 17, date: '19-02-25', time: '4:00 PM', event: 'Snacks', location: 'S-02' },
    { id: 18, date: '19-02-25', time: '5:00 PM', event: 'Activity Check (GitHub Push)', location: 'Online' },
    { id: 19, date: '19-02-25', time: '6:00 PM - 7:00 PM', event: 'Internal Faculty Visits and Progress Tracking', location: 'S-08' },
    { id: 20, date: '19-02-25', time: '8:00 PM', event: 'Activity Check (GitHub Push)', location: 'Online' },
    { id: 21, date: '19-02-25', time: '8:30 PM', event: 'Dinner', location: 'S-02' },
    { id: 22, date: '19-02-25', time: '11:00 PM', event: 'Activity Check (GitHub Push)', location: 'Online' },
    { id: 23, date: '20-02-25', time: '12:00 AM', event: 'Snacks', location: 'S-02' },
    { id: 24, date: '20-02-25', time: '2:00 AM', event: 'Activity Check (GitHub Push)', location: 'Online' },
    { id: 25, date: '20-02-25', time: '3:00 AM', event: 'Snacks', location: 'S-02' },
    { id: 26, date: '20-02-25', time: '5:00 AM', event: 'Activity Check (GitHub Push)', location: 'Online' },
    { id: 27, date: '20-02-25', time: '8:00 AM', event: 'Activity Check (GitHub Push)', location: 'Online' },
    { id: 28, date: '20-02-25', time: '8:30 AM', event: 'Breakfast', location: 'S-02' },
    { id: 29, date: '20-02-25', time: '11:00 AM', event: 'Activity Check (GitHub Push)', location: 'Online' },
    { id: 30, date: '20-02-25', time: '11:00 AM', event: 'Final Phase Begins', location: 'S-08' },
    { id: 31, date: '20-02-25', time: '2:00 PM', event: 'Time Ends', location: 'S-08' },
    { id: 32, date: '20-02-25', time: '2:00 PM', event: 'Lunch', location: 'S-02' },
    { id: 33, date: '20-02-25', time: '2:30 PM', event: 'Evaluation start', location: 'S-08' },
    { id: 34, date: '20-02-25', time: '4:30 PM', event: 'Evaluation End', location: 'S-08' },
    { id: 38, date: '20-02-25', time: '5:00 PM', event: 'Top 5 Winners Announcement', location: 'S-08' }
  ];
  const themes = [
    {
      title: "AI/ML",
      icon: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png"
    },
    {
      title: "Cyber Security & Blockchain",
      icon: "https://cdn-icons-png.flaticon.com/512/2092/2092663.png"
    },
    {
      title: "Internet of Things (IoT)",
      icon: "https://cdn-icons-png.flaticon.com/512/6080/6080697.png"
    },
    {
      title: "Cloud Computing",
      icon: "https://png.pngtree.com/png-clipart/20230417/original/pngtree-computing-cloud-flat-icon-png-image_9064525.png"
    },
    {
      title: "Data Science & Analytics",
      icon: "https://cdn-icons-png.flaticon.com/512/2821/2821637.png"
    }
  ];

  return (
    <div className="sitnovate-container">
      <ParticlesComponent id="particles" />
      <section className="about">
        <img src="./image/SIT_NGPR_1.png" alt="SIT Logo" className="logo" />
        <h1 className="title">SITNovate 2025</h1>
        <p className="subtitle">A Great Fundraising Opportunity to Showcase Your Talent</p>
        <img src="/image/sitNovet.jpg" alt="SITNovate POSTER" className='image_SITNovate'/>
        <div className="details">
          <p><strong>Date:</strong> 19th Feb, 2025</p>
        </div>
        
        <div className="description">
          <h2>About the Event</h2>
          <p>
            <b>SITNovate</b> is an exhilarating 24-hour hackathon crafted to push the boundaries of creativity, innovation, and technical prowess. Designed for teams of three, this event provides a platform for participants to ideate, code, and build groundbreaking projects in a vibrant and competitive environment.
            Throughout the hackathon, participants will benefit from mentorship sessions, hands-on workshops, and access to essential resources, fostering both learning and collaboration. It's an excellent opportunity to not only showcase your skills but also to network with like-minded individuals and industry experts.
            With exciting prizes up for grabs, <b>SITNovate</b> is the ultimate arena for coding enthusiasts, design aficionados, and problem-solvers to unleash their potential. Whether you're a seasoned developer or just starting out, <b>SITNovate</b> promises a memorable journey of innovation, teamwork, and discovery!
          </p>
        </div>
        {/* <p>Step 1:</p>
        <button className="Register" onClick={() => window.open("https://forms.gle/KGf7H5EJgw6TK6qp8", "_blank")}>
          Register Now
        </button>
        <br />
        <p>Step 2:</p>
        <button className="Register" onClick={() => window.open("https://sit-novate.devfolio.co/", "_blank")}>
          Register Now
        </button> */}
        <button className="Register" onClick={() => window.open("https://sit-novate.devfolio.co/", "_blank")}>
          Register Now
        </button>
        <ul className="pt-4 text-left text-lg bg-dark border border-gray-300 rounded-lg p-4 shadow-md">
          <h2>Important Notice:</h2>

          <h4>Registration & Initial Steps</h4>
          <li>Registrations will close on <span className='text-danger'>14th February 25 at 11:59 PM</span>.</li>
          <li>Problem tracks, rules, guidelines, and PPT template will be shared in the WhatsApp group on <span className='text-danger'>15th February 25 at 12:00 PM</span>.</li>
          <h4>Round 1: Online</h4>
          <li>The deadline for PPT submission is <span className='text-danger'>16th February 25 at 12:00 PM</span>.</li>
          <li>Complete evaluation of PPTs to finalize the top 40 teams will be conducted on <span className='text-danger'>16th February 25 at 5:00 PM</span>.</li>
          <li>The final list of the top 40 teams will be posted in the WhatsApp group on <span className='text-danger'>16th February 25 at 7:00 PM</span>.</li>

          <h4>Round 2: Offline</h4>
          <p>The final round will be conducted at Symbiosis campus on <span className='text-danger'>19th February 25</span>, with only 40 teams qualifying for participation.</p>
          <p>Further details will be provided on the official WhatsApp community page. We look forward to your participation!</p>
        </ul>
        {/* Table */}

        <div className="overflow-x-auto p-4">
      <table className="min-w-full border border-gray-300 text-left text-sm text-gray-600">
        <thead>
          <tr className="bg-gray-100 text-gray-900">
            <th className="border px-4 py-2">Sno.</th>
            <th className="border px-4 py-2">Date</th>
            <th className="border px-4 py-2">Time</th>
            <th className="border px-4 py-2">Event</th>
            <th className="border px-4 py-2">Location</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{item.id}</td>
              <td className="border px-4 py-2">{item.date}</td>
              <td className="border px-4 py-2">{item.time}</td>
              <td className="border px-4 py-2">{item.event}</td>
              <td className="border px-4 py-2">{item.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* PPT and Judging Criteria  */}
<div className="ppt-judging">
  <h2>PPT and Judging Criteria</h2>
  <p>Participants are required to submit a PowerPoint presentation (PPT) as part of the initial round. The PPT should include the following details:</p>
  <a href="SITnovatePresentationTemplate.pptx" download>
    <button className="Register">Download PPT 1</button>
  </a>

  <p>The judging criteria for the PPT round will be based on the following parameters:</p>
  
  <a href="Event_Judging_Criteria.docx" download>
    <button className="Register">Download Judging Criteria (Word)</button>
  </a>
</div>


        <div className="highlights">
          <h2>Key Highlights of the Event</h2>
          <div className="button-list">
            <button className="highlight-button">
              <img src="https://cdn-icons-png.flaticon.com/512/9669/9669634.png" alt="Investment Opportunity" />
              24-Hour Hackathon
            </button>
            <button className="highlight-button">
              <img src="https://static.vecteezy.com/system/resources/thumbnails/026/987/978/small_2x/single-one-line-drawing-two-young-businessmen-helping-each-other-to-go-up-to-pile-of-cogs-teamwork-people-trust-assistance-technology-gear-collaboration-solution-continuous-line-draw-design-png.png" alt="Potential Seed Funding" />
              Team Collaboration
            </button>
            <button className="highlight-button">
              <img src="https://static.vecteezy.com/system/resources/previews/021/666/207/original/3d-trophy-cup-with-gift-boxes-and-award-medal-winner-with-prize-and-golden-cup-3d-rendering-png.png" alt="Attractive Prizes" />
              Exciting Prizes & Recognition
            </button>
            <button className="highlight-button">
              <img src="https://static.vecteezy.com/system/resources/previews/014/432/446/non_2x/innovation-creativity-or-imagination-for-business-success-illustration-png.png" alt="Participation Certificate" />
              Innovative Challenges
            </button>
            <button className="highlight-button">
              <img src="https://www.pngplay.com/wp-content/uploads/7/Networking-Transparent-Background.png" alt="Incubation Assistance" />
              Networking Opportunities
            </button>
            <button className="highlight-button">
              <img src="https://cdn-icons-png.flaticon.com/512/2344/2344491.png" alt="Online Mentoring" />
              Unleash Your Potential
            </button>
          </div>
        </div>

        <div className="highlights">
          <h2>Themes</h2>
          <div className="button-list">
            {themes.map((theme, index) => (
              <button key={index} className="highlight-button">
                <img src={theme.icon} alt={theme.title} />
                {theme.title}
              </button>
            ))}
          </div>
        </div>

        <div className="contact">
          <h2>Contact Us</h2>
          <p>For any inquiries or further details, please contact:</p>
          <p>SITNovation Team</p>
          <p>Phone: +91 9975661769 , +91 9712935674</p>
        </div>
      </section>

      <footer className="footer">
        <p className='text-center'>&copy; 2025 Enthusia. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default SITNovate;