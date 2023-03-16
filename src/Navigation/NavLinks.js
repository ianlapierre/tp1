import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

function NavLinks(props) {
  return <ul className="nav-links">
    <li>
      <NavLink to="/" exact>Acceuil</NavLink>
    </li>
    <li>
      <NavLink to="/cours">Cours</NavLink>
    </li>
    <li>
      <NavLink to="/cours">Professeurs</NavLink>
    </li>
  </ul>
};

export default NavLinks;