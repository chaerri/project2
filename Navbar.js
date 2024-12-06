// src/components/Navbar.js
import React from 'react';

function Navbar({ setPage }) {
  return (
    <nav className="navbar">
      <button onClick={() => setPage('home')}>Home</button>
      <button onClick={() => setPage('stats')}>User Stats</button>
    </nav>
  );
}

export default Navbar;
