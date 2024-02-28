import React from 'react';
import '../index.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="../public/images/pokemon.png" alt="Logo" className="logo" />
      </div>
      <div className="navbar-items">
      </div>
    </nav>
  );
}

export default Navbar;