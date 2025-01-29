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
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src="favicon.png" alt="Symbiosis" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/About">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/SITNovate">SITNovate</Link>
                            </li>
                            {/* SITCodeSprint */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/SITCodeSprint">SITCodeSprint</Link>
                            </li>
                            {/* SITANK */}
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
                        <form className="d-flex ms-3" role="search" onSubmit={handleSubmit}>
                            <input type="email" className="input" id="Email" name="Email" placeholder="example@gmail.com" autoComplete="off" />
                            <input className="button--submit" value="Subscribe" type="submit" />
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
