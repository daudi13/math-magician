import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <div className="navBar">
    <div className="logo">MATH101</div>
    <ul className="nav">
      <li><Link to="/">Home</Link></li>
      <li><Link to="App">Calculator</Link></li>
      <li><Link to="Quotes">Quotes</Link></li>
    </ul>
  </div>
);

export default Navbar;
