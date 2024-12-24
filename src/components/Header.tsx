import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();

  const getTitle = (): string => {
    switch (location.pathname) {
      case '/about':
        return 'About Me';
      case '/resume':
        return 'My Resume';
      case '/blog':
        return 'My Blog';
      case '/contact':
        return 'Contact Me';
      default:
        return 'Venkat Polur';
    }
  };

  return (
    <header>
      <h1>{getTitle()}</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;