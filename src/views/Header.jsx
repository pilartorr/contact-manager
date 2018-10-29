import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="mb-5">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-brand" style={{listStyleType: "none"}}>
        <li><Link to='/'>Sign Up</Link></li>
        <li><Link to='/signin'>Sign In</Link></li>
        <li><Link to='/newcontact'>New contact</Link></li>
        <li><Link to='/contacts'>Contacts</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header;
