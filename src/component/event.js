import React, { useState } from 'react';

const EventCard = ({ title, description, imageUrl, applyLink, wordLimit }) => {
  const [showFullText, setShowFullText] = useState(false);

  const truncatedDescription = description.split(' ').slice(0, wordLimit).join(' ');

  return (
    <div className="col-md-4 mb-3">
      <div className="card bg-black text-white border-1 border-white">
        <div className="card-body">
          <img 
            src={imageUrl} 
            className="event-image" 
            alt={`${title}`} 
            style={{
              width: "100%", 
              height: "200px", 
              objectFit: "cover"
            }} 
          />
          <h5 className="card-title mt-3">{title}</h5>
          <p className="card-text fs-10">
            {showFullText ? description : truncatedDescription}
            {description.split(' ').length > wordLimit && (
              <span 
                style={{ color: 'blue', cursor: 'pointer' }}
                onClick={() => setShowFullText(!showFullText)}
              >
                {showFullText ? ' Read Less' : '... Read More'}
              </span>
            )}
          </p>
          <div className="text-center">
            <button 
              className="btn btn-primary btn-lg" 
              onClick={() => window.location.href = applyLink}
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Events = () => {
  const events = [
    {
      title: 'TechTalks',
      description: 'TechTalks, a series of technical talks at Enthusia 4.0, features industry experts and academics sharing insights on cutting-edge technologies, trends, and best practices. Open to all participants, these talks provide valuable knowledge, inspiration, and networking opportunities, fostering learning and innovation.',
      imageUrl: './image/techtalks.jpg',
      applyLink: '/'
    },
    {
      title: 'SITNovate',
      description: 'Enthusia 4.0, the annual flagship event of SIT Nagpur, features a thrilling 24-hour offline Hackathon as its mega event. Open to participants from across India, this SITNovate invites teams of 3-4 talented individuals to gather at our campus to tackle challenging real-world problem statements, showcasing their coding prowess and problem-solving skills in an intense and inspiring environment. This Hackathon provides an exceptional platform for students to engage with cutting-edge technology, network with like-minded peers, and turn ideas into impactful solutions.',
      imageUrl: './image/hackathon.png',
      applyLink: '/SITNovate'
    },
    {
      title: 'SIT CodeSprint',
      description: 'SIT CodeSprint, a national-level coding event at Enthusia 4.0, invites top coders from across India to tackle algorithmic challenges testing coding skills, logic, and speed. It provides a platform to showcase problem-solving abilities, compete with the best minds, and enhance expertise in a dynamic environment.',
      imageUrl: './image/compii.jpg',
      applyLink: '/SITCodeSprint'
    },
    {
      title: 'SI Tank',
      description: 'SITank, the SIT version of Shark Tank at Enthusia 4.0, is an event fostering innovation and entrepreneurship. Open to participants nationwide, it provides a platform for aspiring entrepreneurs to pitch ideas to industry experts and investors, showcasing innovation, receiving feedback, and competing for funding and recognition. It’s an excellent opportunity for entrepreneurs to connect with mentors and investors. This event is in collaboration with Indovation Center, Western Region, Ministry of Education’s Innovation Cell, Incubein Foundation, RTM Nagpur University, Nagpur and TiE, Nagpur',
      imageUrl: './image/SI-tank.png',
      applyLink: '/SITANK'
    }
  ];

  return (
    <section className="events">
      <div className="row justify-content-center align-items-center text-center" style={{ gap: '1rem', marginTop: '2rem', marginBottom: '2rem', padding: '0 1rem', width: '100%', margin: 'auto' , display: 'flex', flexWrap: 'wrap' }}>
        {events.map((event, index) => (
          <EventCard 
            key={index}
            title={event.title}
            description={event.description}
            imageUrl={event.imageUrl}
            applyLink={event.applyLink}
            wordLimit={30} // Set word limit here
          />
        ))}
      </div>
    </section>
  );
};

export default Events;
