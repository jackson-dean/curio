import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to="profile">Profile</Link>
      </li>
      <li>
        <Link to="lists">My Lists</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
