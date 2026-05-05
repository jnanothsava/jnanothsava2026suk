import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';
import universityLogo from '../assets/university-text-logo.png';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') setDeferredPrompt(null);
    } else {
      alert('To install the app:\n\niOS: Tap Share → "Add to Home Screen"\nAndroid / Desktop: Use "Install" or "Add to Home Screen" from browser menu.');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          <Link to="/" className="logo" onClick={() => window.scrollTo(0, 0)} style={{ display: 'flex', alignItems: 'center' }}>
            <img src={universityLogo} alt="University Logo" style={{ height: '130px', objectFit: 'contain', transform: 'scale(1.3)', transformOrigin: 'left center' }} />
          </Link>

          <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                onClick={() => {
                  window.scrollTo(0, 0);
                  setIsOpen(false);
                }}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

          <div className="navbar-actions">
            {location.pathname === '/' && (
              <button className="btn-install-floating" onClick={handleInstallClick} aria-label="Install App" style={{ position: 'relative', top: 0, right: 0 }}>
                <Download size={20} />
              </button>
            )}
            <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
