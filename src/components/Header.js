import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <img src="/myapplogo.jpeg" alt="Astra Logo" className="logo" />
      <div className="school-info">
        <h1>ASTRA PRESCHOOL</h1>
        <p>5th Cross, Ganesh Temple Road, Sadashiv Nagar, Tumkur - 572101</p>
        <p>Phone: 9008887230</p>
      </div>
    </div>
  );
}

export default Header;
