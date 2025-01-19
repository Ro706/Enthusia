// import React, { useState } from 'react';
import './App.css';
import React from 'react';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import About from './component/About';
import Home from './component/Home';
import Sponsor from './component/Sponsor';
import Contact from './component/Contact';
import SITNovate from './component/SITNovate';
import SITCodeSprint from './component/SITCodeSprint';
import SITANK from './component/SITANK';
const App = () => {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes> {/* Wrap Routes */}
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About/>} />
          <Route path='/SITNovate' element={<SITNovate/>} />
          <Route path='/SITCodeSprint' element={<SITCodeSprint/>} />
          <Route path='/SITANK' element={<SITANK/>} />
          <Route path='/Sponsor' element={<Sponsor/>} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;