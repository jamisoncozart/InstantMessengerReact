import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return(
    <div class='Header'>
      <h1>ReactChat</h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/signin'>Sign In</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header;