import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand">Navbar</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="navbar-brand" to='/'>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand" to='/about'>About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
