import React from 'react'
import './css/SITCodeSprint.css'; // CSS for styling
import ParticlesComponent from './particles'; // Import ParticlesComponent for background
function SITCodeSprint() {
  return (
    <div>
      <ParticlesComponent id="particles" />
      
      {/* Logo Section */}
      <img src="./image/SIT_NGPR_1.png" alt="SIT Logo" className="logo" />
      
      {/* Title Section */}
      <h1 className="title">SITCodeSprint 2025</h1>
    </div>
  )
}

export default SITCodeSprint
