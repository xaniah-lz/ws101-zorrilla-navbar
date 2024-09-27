// src/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = ({ onNavigate }) => {
  return (
    <nav className="navbar">
      <h1>Welcome!</h1>
      <ul>
        <li className="nav-item" onClick={() => onNavigate('home')}>Home</li>
        <li className="nav-item" onClick={() => onNavigate('about')}>About</li>
        <li className="nav-item" onClick={() => onNavigate('contact')}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;

