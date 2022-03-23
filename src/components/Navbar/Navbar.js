import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navBar">
    <Link to="/">Home</Link>
    |
    {' '}
    <Link to="App">Calculator</Link>
    |
    {' '}
    <Link to="Quotes">Quotes</Link>
  </nav>
);

export default Navbar;
