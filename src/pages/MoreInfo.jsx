import React from 'react';
import { Calendar, Users, FileText, ExternalLink } from 'lucide-react';
import { eventsData } from '../data/events';
import './MoreInfo.css';

const MoreInfo = () => {
  const parseStartTime = (value) => {
    const match = value.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
    if (!match) {
      return Number.MAX_SAFE_INTEGER;
    }

    let hours = Number(match[1]) % 12;
    const minutes = Number(match[2]);

    if (match[3].toUpperCase() === 'PM') {
      hours += 12;
    }

    return hours * 60 + minutes;
  };

  const sortByTime = (first, second) => parseStartTime(first.time) - parseStartTime(second.time);

  const dayGroups = [
    {
      title: 'Day 1: May 15, 2026',
      date: '15 May 2026',
    },
    {
      title: 'Day 2: May 16, 2026',
      date: '16 May 2026',
    },
  ].map((day) => ({
    ...day,
    competitive: eventsData
      .filter((event) => event.date === day.date && event.category !== 'Cultural')
      .sort(sortByTime),
    cultural: eventsData
      .filter((event) => event.date === day.date && event.category === 'Cultural')
      .sort(sortByTime),
  }));

  return (
    <div className="container page-shell page-shell--wide animate-fade-in">
      <div className="events-header">
        <h1 className="section-title">More <span className="text-gradient">Information</span></h1>
      </div>

      <div className="event-content-section">
        <h2><FileText size={24} className="text-gradient" /> Downloads</h2>
        <div className="resource-links">
          <a
            href="/brochure.pdf"
            target="_blank"
            rel="noreferrer"
            className="resource-link-card"
          >
            <div>
              <h3>Fest Brochure</h3>
              <p>Open the official brochure document.</p>
            </div>
            <ExternalLink size={20} />
          </a>
          <a
            href="/schedule.pdf"
            target="_blank"
            rel="noreferrer"
            className="resource-link-card"
          >
            <div>
              <h3>Fest Schedule</h3>
              <p>Open the detailed schedule document.</p>
            </div>
            <ExternalLink size={20} />
          </a>
        </div>
      </div>

      <div className="event-content-section">
        <h2><Calendar size={24} className="text-gradient" /> Full Schedule Table</h2>
        {dayGroups.map((day) => (
          <div key={day.date}>
            <h3 className="section-subhead">{day.title}</h3>

            <h4 className="section-subhead" style={{ fontSize: '1rem', marginTop: '1rem' }}>Competitive Events</h4>
            <div className="more-info-table-wrap">
              <table className="more-info-table">
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Event</th>
                    <th>Venue</th>
                  </tr>
                </thead>
                <tbody>
                  {day.competitive.map((event) => (
                    <tr key={event.id}>
                      <td data-label="Time">{event.time}</td>
                      <td data-label="Event">{event.title}</td>
                      <td data-label="Venue">{event.venue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h4 className="section-subhead" style={{ fontSize: '1rem', marginTop: '1rem' }}>Cultural Events</h4>
            <div className="more-info-table-wrap">
              <table className="more-info-table">
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Event</th>
                    <th>Venue</th>
                  </tr>
                </thead>
                <tbody>
                  {day.cultural.map((event) => (
                    <tr key={event.id}>
                      <td data-label="Time">{event.time}</td>
                      <td data-label="Event">{event.title}</td>
                      <td data-label="Venue">{event.venue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>

      <div className="event-content-section">
        <h2><FileText size={24} className="text-gradient" /> Global Rules</h2>
        <div className="muted-copy">
          <p>1. Students must carry their valid college ID cards at all times.</p>
          <p>2. Decisions made by the judges and event coordinators are final and binding.</p>
          <p>3. Participants must adhere strictly to the time limits mentioned for all events.</p>
          <p>4. JNANOTHSAVA 2026 reserves the right to modify the schedule if necessary.</p>
        </div>
      </div>

      <div className="event-content-section" id="committees">
        <h2><Users size={24} className="text-gradient" /> Committees</h2>

        <div className="committee-grid">
          <div className="committee-card">
            <h3>Technical Committee</h3>
            <div className="committee-member">
              <span><strong>Dr. Gajendran M</strong></span>
              <a href="tel:9036251072" style={{ color: 'var(--color-secondary-light)' }}>9036251072</a>
            </div>
            <div className="committee-member">
              <span><strong>Dr. Sridevi M H</strong></span>
              <a href="tel:9538626926" style={{ color: 'var(--color-secondary-light)' }}>9538626926</a>
            </div>
            <div className="committee-member">
              <span><strong>Dr. Nagbasvanna Gurgol</strong></span>
              <a href="tel:9731782555" style={{ color: 'var(--color-secondary-light)' }}>9731782555</a>
            </div>
            <div className="committee-member">
              <span><strong>Prof. Maheshchandra</strong></span>
              <a href="tel:8088489456" style={{ color: 'var(--color-secondary-light)' }}>8088489456</a>
            </div>
          </div>

          <div className="committee-card">
            <h3>Cultural Committee</h3>
            <div className="committee-member">
              <span><strong>Dr. Swati K</strong></span>
              <a href="tel:8050604096" style={{ color: 'var(--color-secondary-light)' }}>8050604096</a>
            </div>
            <div className="committee-member">
              <span><strong>Dr. Pallavi Patil</strong></span>
              <a href="tel:8123756049" style={{ color: 'var(--color-secondary-light)' }}>8123756049</a>
            </div>
            <div className="committee-member">
              <span><strong>Prof. Dhanraj</strong></span>
              <a href="tel:9880024049" style={{ color: 'var(--color-secondary-light)' }}>9880024049</a>
            </div>
          </div>

          <div className="committee-card">
            <h3>Registration Committee</h3>
            <div className="committee-member">
              <span><strong>Dr. Archana K</strong></span>
              <a href="tel:9060867912" style={{ color: 'var(--color-secondary-light)' }}>9060867912</a>
            </div>
            <div className="committee-member">
              <span><strong>Prof. Bhagyalaxmi Koti</strong></span>
              <a href="tel:9902903533" style={{ color: 'var(--color-secondary-light)' }}>9902903533</a>
            </div>
            <div className="committee-member">
              <span><strong>Prof. Geeta N</strong></span>
              <a href="tel:8884023906" style={{ color: 'var(--color-secondary-light)' }}>8884023906</a>
            </div>
            <div className="committee-member">
              <span><strong>Prof. Priyanka</strong></span>
              <a href="tel:9035183629" style={{ color: 'var(--color-secondary-light)' }}>9035183629</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
