import React, { useState } from 'react';
import { motion } from 'framer-motion';

const EventCard = ({ 
  title, 
  description, 
  imageUrl, 
  applyLink, 
  wordLimit,
  imageWidth = '100%',  
  imageHeight = 'auto', 
  cardMinHeight = '400px' 
}) => {
  const [showFullText, setShowFullText] = useState(false);
  const truncatedDescription = description.split(' ').slice(0, wordLimit).join(' ');

  return (
    <motion.div
      className="col-lg-4 col-md-4 col-sm-6 mb-4 d-flex justify-content-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.4, ease: 'easeOut' }}
    >
      <div
        className="card bg-transparent text-white border-1 border-white"
        style={{ 
          width: '100%', 
          minHeight: cardMinHeight, 
          paddingRight: '15px', 
          borderRight: '2px solid #ccc'
        }}
      >
        <div className="card-body d-flex flex-column align-items-center">
          <div className="image-container" style={{ width: imageWidth }}>
            <img
              src={imageUrl}
              className="event-image mb-3"
              alt={`${title}`}
              style={{
                width: '100%',
                height: imageHeight,
                objectFit: "cover",
                borderRadius: "8px"
              }}
            />
          </div>
          <h5 className="card-title mt-3 text-center">{title}</h5>
          <p className="card-text text-center" style={{ flexGrow: 1 }}>
            {showFullText ? description : truncatedDescription}
            {description.split(' ').length > wordLimit && (
              <span
                className="text-blue-500 cursor-pointer ml-1 hover:text-blue-600"
                onClick={() => setShowFullText(!showFullText)}
              >
                {showFullText ? ' Read Less' : '... Read More'}
              </span>
            )}
          </p>
          <button
            className="btn btn-primary btn-lg mt-auto"
            onClick={() => window.location.href = applyLink}
          >
            Apply Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Events = () => {
  const events = [
    {
      title: 'SITNovate',
      description: 'Enthusia 4.0, the annual flagship event of SIT Nagpur, features a thrilling 24-hour offline Hackathon as its mega event. Open to participants from across India, this SITNovate invites teams of 2-3 talented individuals to gather at our campus to tackle challenging real-world problem statements, showcasing their coding prowess and problem-solving skills in an intense and inspiring environment. This Hackathon provides an exceptional platform for students to engage with cutting-edge technology, network with like-minded peers, and turn ideas into impactful solutions.',
      imageUrl: './image/sitNovet.jpg',
      applyLink: '/SITNovate',
      wordLimit: 30,
      imageWidth: '100%',
      imageHeight: 'auto'
    },
    {
      title: 'SIT CodeSprint',
      description: 'SIT CodeSprint, a national-level coding event at Enthusia 4.0, invites top coders from across India to tackle algorithmic challenges testing coding skills, logic, and speed. It provides a platform to showcase problem-solving abilities, compete with the best minds, and enhance expertise in a dynamic environment.',
      imageUrl: './image/codeSPRINT.png',
      applyLink: '/SITCodeSprint',
      wordLimit: 100,
      imageWidth: '100%',
      imageHeight: 'auto'
    },
    {
      title: 'SI Tank',
      description: 'SITank, the SIT version of Shark Tank at Enthusia 4.0, is an event fostering innovation and entrepreneurship. Open to participants nationwide, it provides a platform for aspiring entrepreneurs to pitch ideas to industry experts and investors, showcasing innovation, receiving feedback, and competing for funding and recognition. It\'s an excellent opportunity for entrepreneurs to connect with mentors and investors. This event is in collaboration with Indovation Center, Western Region, Ministry of Education\'s Innovation Cell, Incubein Foundation, RTM Nagpur University, Nagpur and TiE, Nagpur.',
      imageUrl: './image/SITANK.jpg',
      applyLink: '/SITANK',
      wordLimit: 50,
      imageWidth: '100%',
      imageHeight: 'auto'
    }
  ];

  return (
    <section className="events">
      <div className="container">
        <div className="row justify-content-between">
          {events.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              description={event.description}
              imageUrl={event.imageUrl}
              applyLink={event.applyLink}
              wordLimit={event.wordLimit}
              imageWidth={event.imageWidth}
              imageHeight={event.imageHeight}
              cardMinHeight="450px"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
