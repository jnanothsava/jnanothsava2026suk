import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Linkedin, Instagram, Youtube, Facebook } from 'lucide-react';
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
              <a
                href="https://maps.app.goo.gl/nETsHRpSFEazpppu5?g_st=ic"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', color: 'inherit', textDecoration: 'none' }}
              >
                <MapPin size={18} /> Sharnbasva University, Kalaburagi
              </a>
            </div>
            
            <h3 style={{ marginTop: '1.5rem' }}>Follow Us</h3>
            <div className="footer-socials" style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <a href="https://www.linkedin.com/school/sharnbasva-university-kalaburagi/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}><Linkedin size={24} /></a>
              <a href="https://www.instagram.com/sharnabasvauniversity_official" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}><Instagram size={24} /></a>
              <a href="https://whatsapp.com/channel/0029VbCdPXeKAwEd4eVcwC3e" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </a>
              <a href="https://youtube.com/@sharnbasvauniversitykalabu5630" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}><Youtube size={24} /></a>
              <a href="https://www.facebook.com/share/1F19fDMiSv/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}><Facebook size={24} /></a>
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
