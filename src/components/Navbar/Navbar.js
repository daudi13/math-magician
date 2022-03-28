import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <div className="navBar">
    <div className="logo">MATH101</div>
    <ul className="nav">
      <li><NavLink className="link-btn" to="/">Home</NavLink></li>
      <li><NavLink className="link-btn" to="App">Calculator</NavLink></li>
      <li><NavLink className="link-btn" to="Quotes">Quotes</NavLink></li>
    </ul>
  </div>
);

export default Navbar;
