import React from 'react';
import './css/SITNovate.css';
import ParticlesComponent from './particles';

function SITNovate() {
  return (
    <div>
      <ParticlesComponent id="particles" />
      
      {/* Logo Section */}
      <img src="./image/SIT_NGPR_1.png" alt="SIT Logo" className="logo" />
      
      {/* Title Section */}
      <h1 className="title">SITNovate 2025</h1>
    </div>
  );
}

export default SITNovate;
