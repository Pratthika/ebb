// Header.js

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/user-profile">User Profile</Link></li>
          <li><Link to="/blood-donation">Blood Donation</Link></li>
          <li><Link to="/blood-request">Blood Request</Link></li>
          <li><Link to="/communication">Communication</Link></li>
          <li><Link to="/location-map">Location Map</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li> {/* Add this line */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
