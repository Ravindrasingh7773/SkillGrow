import React from 'react';
import './style.module.css';

const Header = () => {
  return (
    <header className="header">
      <div className="top-bar">
        <div className="contact-info">
          <span>📍 589 5th Ave, NY 10024, USA</span>
          <span>✉️ info@skillgro.com</span>
        </div>
        <div className="social-info">
          <span>Call us: +123 599 8989</span>
          <span>Follow Us On: [Icons]</span>
        </div>
      </div>
      <nav className="navbar">
        <div className="logo">SkillGro</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Courses</li>
          <li>Pages</li>
          <li>Shop</li>
          <li>Blog</li>
        </ul>
        <div className="nav-actions">
          <button className="btn-heart">❤️</button>
          <button className="btn-cart">🛒</button>
          <button className="btn-login">Log in</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
