import React, { useState } from 'react';
import './css/winner.css';
import { motion } from 'framer-motion';

const winners = [
  { 
    id: 1, 
    name: "Alex Johnson", 
    team: "Aqua Innovators",
    college: "GreenTech University",
    description: "Innovated a sustainable water purification system.",
    image: "./image/winner.jpg"
  },
  { 
    id: 2, 
    name: "Maya Patel", 
    team: "EduAI Pioneers",
    college: "Future Minds Institute",
    description: "Developed an AI-powered education platform.",
    image: "./image/winner.jpg"
  },
  { 
    id: 3, 
    name: "Jamal Khan", 
    team: "Renewable Visionaries",
    college: "EcoTech College",
    description: "Created a low-cost renewable energy solution.",
    image: "./image/winner.jpg"
  }
];
const WinnerCard = ({ winner }) => {
    const [showFullText, setShowFullText] = useState(false);
    const wordLimit = 20;
    const truncatedDescription = winner.description.split(' ').slice(0, wordLimit).join(' ');
  
    return (
      <motion.div
        className="card bg-gray-800 text-white rounded-2xl overflow-hidden shadow-2xl flex flex-row items-center w-full max-w-3xl border-4 border-white transition-transform transform hover:scale-105 hover:shadow-3xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
      >
        <img src={winner.image} alt={winner.name} className="w-24 sm:w-48 h-24 sm:h-48 object-cover rounded-2xl m-4" />
        <div className="card-body flex-1 p-6">
          <h3 className="text-3xl font-extrabold mb-2 text-blue-400">{winner.team}</h3>
          <p className="text-lg text-gray-300 mb-2">Team Member: <span className="font-medium">{winner.name}</span></p>
          <p className="text-lg text-gray-300 mb-2">College: <span className="font-medium">{winner.college}</span></p>
          <p className="text-gray-400">
            {showFullText ? winner.description : truncatedDescription}
            {winner.description.split(' ').length > wordLimit && (
              <span
                className="text-blue-500 cursor-pointer ml-1 hover:text-blue-600"
                onClick={() => setShowFullText(!showFullText)}
              >
                {showFullText ? ' Read Less' : '... Read More'}
              </span>
            )}
          </p>
        </div>
      </motion.div>
    );
  };
  
  const Winner = () => {
    return (
      <section>
        <div className="winners-container p-8">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-blue-400">SITNovate Winner 2025</h2>
          <div className="flex flex-row flex-wrap justify-center gap-8">
            {winners.map((winner) => (
              <WinnerCard key={winner.id} winner={winner} />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Winner;
  