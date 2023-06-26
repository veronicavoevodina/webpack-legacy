import React, { useState, useEffect } from 'react';
import img from '../images/logo.svg';
import { DataList } from '../Data';
import { socialLinks } from '../Data';

const Navbar = () => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (active) {
      document.addEventListener('click', function (e) {
        if (
          e.target.className !== 'navbar-link' &&
          e.target.className !== 'fas fa-bars'
        ) {
          setActive(false);
        }
      });
    }
  }, [active]);
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={img} className="nav-logo" alt="backroads" />
          <ul className={active ? 'navbar-links active' : 'navbar-links'}>
            {DataList.map((link) => {
              return (
                <li
                  key={link.id}
                  style={{ width: '100%', textAlign: 'center' }}
                  onClick={() => setActive(false)}
                >
                  <a href={link.href} className="navbar-link">
                    {link.text}
                  </a>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            className="nav-toggle"
            id="nav-toggle"
            onClick={() => setActive(!active)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <ul className="nav-links" id="nav-links">
          {DataList.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} className="nav-link">
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((link) => {
            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-icon"
                >
                  <i className={link.icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
