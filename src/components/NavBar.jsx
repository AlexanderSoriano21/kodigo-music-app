import React from 'react'
import { Link } from 'react-router-dom';

const links = [
{
    name: 'Premium',
    href: '/premium'
},
{
    name: 'Registrarse',
    href: '/registrarse'
}
];

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/premium">Kodigo Music</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            {links.map((link, index) => (
              <li key={index} className="nav-item">
                <Link className="nav-link" to={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar