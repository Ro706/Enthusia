import React from 'react';
import './css/Nav.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const email = e.target.Email.value.trim();
        if (!email) return alert("Please enter a valid email address.");
    
        try {
            const response = await fetch('https://enthusia-oi0b.onrender.com/api/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });
    
            const data = await response.json();
            alert(data.message);
            if (response.ok) e.target.reset();
    
        } catch (error) {
            console.error('Request failed:', error);
            alert('Network error. Please check your connection and try again.');
        }
    };
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <img
                        src="favicon.png"
                        alt="Symbiosis"
                        className="nav-logo"
                    />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="https://sitnagpur.edu.in/">SIT Nagpur</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/About">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/SITNovate">SITNovate</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/SITCodeSprint">SITCodeSprint</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/SITANK">SITANK</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Sponsor">Sponsor</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Contact">Contact</Link>
                        </li>
                    </ul>
                    <form className="d-flex ms-lg-3 mt-2 mt-lg-0" role="search" onSubmit={handleSubmit}>
                        <input type="email" className="input" id="Email" name="Email" placeholder="example@gmail.com" autoComplete="off" />
                        <input className="button--submit" value="Subscribe" type="submit" />
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
