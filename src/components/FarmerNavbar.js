import React from 'react';
import { Link } from 'react-router-dom';

const FarmerNavbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/Crop-development">Crop Development</Link>
        </li>
        <li>
          <Link to="/my-orders">My Orders</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/farming-history">Farming History</Link>
        </li>
      </ul>
    </nav>
  );
};

export default FarmerNavbar;
