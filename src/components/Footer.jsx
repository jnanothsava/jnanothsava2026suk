import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <div className="footer-logo">
              <span className="text-gradient">Jnanothsava</span>
            </div>
            <p>
              A Techno-Cultural Fest.
              Innovate, Compete, Celebrate.
            </p>
          </div>

          <div className="footer-col">
            <h3>Quick Links</h3>
            <div className="footer-links">
              <Link to="/about">About</Link>
              <Link to="/events">Events</Link>
              <Link to="/schedule">Schedule</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          <div className="footer-col">
            <h3>Contact Info</h3>
            <div className="footer-links">
              <span style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <MapPin size={18} /> Sharnbasva University
              </span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Jnanothsava. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
