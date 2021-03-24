import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="main-nav">
    <Link to="/" className="nav-text">
      Bootcamp DevSuperior
    </Link>
  </div>
);

export default Navbar;