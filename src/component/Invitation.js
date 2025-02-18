import React from 'react';
import './css/invitation.css';
import ParticlesComponent from './particles';
import Technical from './image/Technical.PNG'; // Import the image
import Music from './image/Music.PNG'; // Import the image

function Invitation() {
  return (
    <div className="invitation">
      <ParticlesComponent id="particles"/>
      <img src={Technical} alt="hacker" />
      <img src={Music} alt="hacker2" />
    </div>
  );
}

export default Invitation;
