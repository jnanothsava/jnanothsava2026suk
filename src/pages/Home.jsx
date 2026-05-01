import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Briefcase, Music, Award, FileText, CalendarDays, ArrowRight } from 'lucide-react';
import concertPoster from '../assets/posters/live-in-concert.jpeg';
import './Home.css';

const Home = () => {
  return (
    <div className="animate-fade-in">
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-badge">May 15-16, 2026</div>
          <h1 className="hero-title">
            <span className="hero-title-main">Jnanothsava</span>
            <span className="hero-title-year">2026</span>
          </h1>
          <h2 className="hero-tagline">Innovate. Compete. Celebrate.</h2>
          <p className="hero-subtext">
            A Techno-Cultural Fest designed to ignite minds
            and bring out the extraordinary in you.
          </p>
          <div className="hero-actions">
            <Link to="/events" className="btn-primary btn-explore">
              <span>Explore Events</span>
              <ArrowRight className="btn-icon" size={20} />
            </Link>
            <Link to="/about" className="btn-outline">
              Learn More
            </Link>
          </div>
          <div className="hero-documents">
            <a
              href="/brochure.pdf"
              target="_blank"
              rel="noreferrer"
              className="document-link-card glass-panel"
            >
              <FileText size={22} />
              <span>Brochure</span>
            </a>
            <a
              href="/schedule.pdf"
              target="_blank"
              rel="noreferrer"
              className="document-link-card glass-panel"
            >
              <CalendarDays size={22} />
              <span>Schedule</span>
            </a>
          </div>

          <div className="concert-spotlight glass-panel">
            <img
              src={concertPoster}
              alt="Aishwarya Rangarajan live in concert poster"
              className="concert-spotlight-poster"
            />
            <div className="concert-spotlight-copy">
              <p className="concert-spotlight-label">Special Attraction</p>
              <h3>Live in Concert by Aishwarya Rangarajan</h3>
              <p>
                Featured on 15 May in Kalaburagi as part of the Jnanothsava 2026 cultural celebrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="highlights-section container">
        <h2 className="section-title">Fest <span className="text-gradient">Highlights</span></h2>
        <div className="highlights-grid">
          <div className="highlight-card glass-panel">
            <div className="highlight-icon">
              <Code size={32} />
            </div>
            <h3>Technical Events</h3>
            <p>Hackathons, coding challenges, robotics, and project expos to test your technical prowess.</p>
          </div>

          <div className="highlight-card glass-panel">
            <div className="highlight-icon">
              <span style={{ color: 'var(--color-accent)' }}><Briefcase size={32} /></span>
            </div>
            <h3>Management Events</h3>
            <p>Stock market games, business quizzes, and strategy events to build future leaders.</p>
          </div>

          <div className="highlight-card glass-panel">
            <div className="highlight-icon">
              <Music size={32} />
            </div>
            <h3>Cultural Events</h3>
            <p>Dance, singing, ramp walks, and arts to showcase your creativity and talent.</p>
          </div>

          <div className="highlight-card glass-panel">
            <div className="highlight-icon">
              <span style={{ color: '#F59E0B' }}><Award size={32} /></span>
            </div>
            <h3>Certificates & Prizes</h3>
            <p>Win exciting cash prizes, goodies, and recognized certificates for participation and merit.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
