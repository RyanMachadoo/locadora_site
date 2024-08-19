// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/aluguel">Aluguel de Veículos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
