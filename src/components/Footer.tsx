import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {year} My React App. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="/privacy" rel="noopener noreferrer">
            Privacy Policy
          </a>
          <a href="/terms" rel="noopener noreferrer">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;