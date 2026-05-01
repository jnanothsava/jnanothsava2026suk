import React from 'react';
import { Link } from 'react-router-dom';
import { eventsData } from '../data/events';
import EventCard from '../components/EventCard';
import culturalPoster from '../assets/posters/cultural-events.jpeg';
import './Events.css';

const Events = () => {
  const eventSections = [
    {
      title: 'Technical Events',
      intro:
        'Coding contests, expos, robotics, design, and innovation challenges drawn directly from the official brochure.',
      events: eventsData.filter((event) => event.category === 'Technical'),
    },
    {
      title: 'Management Events',
      intro:
        'Quiz and trading simulations for participants who want strategy, decision-making, and business thinking on stage.',
      events: eventsData.filter((event) => event.category === 'Management'),
    },
  ];

  const culturalEvents = eventsData.filter((event) => event.category === 'Cultural');
  const culturalStageEventIds = [
    'singing-competition',
    'dance-competition',
    'ramp-walk-competition',
    'standup-comedy',
  ];
  const culturalStageEvents = culturalEvents.filter((event) => culturalStageEventIds.includes(event.id));
  const otherCulturalEvents = culturalEvents.filter((event) => !culturalStageEventIds.includes(event.id));

  return (
    <div className="container animate-fade-in" style={{ padding: '6rem 1.5rem' }}>
      <div className="events-header">
        <h1 className="section-title">Fest <span className="text-gradient">Events</span></h1>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
          Browse the complete event lineup with cultural programs handled as a dedicated stream.
        </p>
      </div>

      <section className="events-track">
        <div className="track-header">
          <p className="track-kicker">Competitions</p>
          <h2 className="track-title">Technical and Management Events</h2>
          <p className="track-copy">
            Explore the academic, technical, and strategy-focused events taking place across both fest days.
          </p>
        </div>

        {eventSections.map((section) => (
          <section key={section.title} className="category-section">
            <div className="category-header">
              <h3 className="category-title">{section.title}</h3>
              <p className="category-copy">{section.intro}</p>
            </div>
            <div className="events-grid">
              {section.events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </section>
        ))}
      </section>

      <section className="events-track events-track--cultural">
        <div className="track-header">
          <p className="track-kicker">Cultural Stream</p>
          <h2 className="track-title">Cultural Events and Stage Programs</h2>
          <p className="track-copy">
            Cultural activities are separated here so performances, fine arts, and stage competitions are easier to browse.
          </p>
        </div>

        <div className="cultural-feature glass-panel">
          <img
            src={culturalPoster}
            alt="Jnanothsava 2026 cultural events poster"
            className="cultural-feature__poster"
          />
          <div className="cultural-feature__content">
            <h3>Cultural Stage Events</h3>
            <p>
              This shared poster covers the main stage lineup. Singing, Dance, Ramp Walk, and Standup Comedy are grouped here with their own detail pages and sub-event breakdowns.
            </p>
            <div className="cultural-stage-links">
              {culturalStageEvents.map((event) => (
                <Link key={event.id} to={`/events/${event.id}`} className="cultural-stage-link">
                  <span>{event.title}</span>
                  <small>{event.date} | {event.time}</small>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <section className="category-section category-section--compact">
          <div className="events-grid">
            {otherCulturalEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>
      </section>
    </div>
  );
};
export default Events;
