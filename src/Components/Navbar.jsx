// Navbar.js
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="menu-item">Home</li>
        <li className="menu-item">Products
          <div className="mega-menu">
            <div className="menu-column">
              <h3>Electronics</h3>
              <ul>
                <li>Phones</li>
                <li>Laptops</li>
                <li>Cameras</li>
              </ul>
            </div>
            <div className="menu-column">
              <h3>Clothing</h3>
              <ul>
                <li>Men</li>
                <li>Women</li>
                <li>Children</li>
              </ul>
            </div>
          </div>
        </li>
        <li className="menu-item">Contact</li>
        <Link className='menu-item' to={'/signup'}>Signup</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
