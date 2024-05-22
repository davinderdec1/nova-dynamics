
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'; 
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="company-name">
        <Link to="/about" className="company-link"> 
          &copy; 2024 Nova Dynamics
        </Link>
        
      </div>
      <div className="social-links">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
