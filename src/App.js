import './App.css';
import { SpeedInsights } from "@vercel/speed-insights/react"
import React from 'react';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
        <Routes>
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