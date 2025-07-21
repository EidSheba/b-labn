import React from 'react';
import './footer.css';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="footer-section py-4">
      <div className="container d-flex justify-content-center align-items-center">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-icon mx-3">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-icon mx-3">
          <FaInstagram />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="footer-icon mx-3">
          <FaTiktok />
        </a>
      </div>
    </footer>
  );
};

export default Footer; 