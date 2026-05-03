import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { eventsData } from '../data/events';
import EventCard from '../components/EventCard';
import culturalPoster from '../assets/posters/cultural-events.jpeg';
import { Search } from 'lucide-react';
import './Events.css';

const Events = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const location = useLocation();

  useEffect(() => {
    if (location.hash && searchQuery === '' && activeCategory === 'All') {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const yOffset = -80; // offset for fixed navbar
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location, searchQuery, activeCategory]);

  const categories = ['All', 'Technical', 'Management', 'Cultural'];

  const filteredEvents = eventsData.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || event.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const isFiltering = searchQuery !== '' || activeCategory !== 'All';

  // Original sections for un-filtered view
  const eventSections = [
    {
      title: 'Technical Events',
      intro:
        'Sharnbasva University is celebrating a Techno-Cultural Festival featuring various exciting technical events aimed at encouraging innovation, creativity, teamwork, and practical learning among students. Events such as Hackathon, CAD War, Robo Race, Project Expo, Coding, Bug Hunt, Technical Quiz, and other competitions provide a platform for participants to showcase their technical knowledge, problem-solving abilities, and innovative ideas.',
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
        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', marginBottom: '2rem' }}>
          Browse the complete event lineup. Use the search or categories to find what you're looking for.
        </p>
        
        <div className="events-controls">
          <div className="search-bar">
            <Search className="search-icon" size={20} />
            <input 
              type="text" 
              placeholder="Search for an event..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="category-pills">
            {categories.map(cat => (
              <button 
                key={cat} 
                className={`pill ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {isFiltering ? (
        <section className="category-section">
          <h3 className="category-title" style={{ marginBottom: '2rem' }}>
            {filteredEvents.length} Event{filteredEvents.length !== 1 && 's'} Found
          </h3>
          {filteredEvents.length > 0 ? (
            <div className="events-grid">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--color-text-muted)' }}>
              No events match your search criteria.
            </div>
          )}
        </section>
      ) : (
        <>
          <section className="events-track">
            <div className="track-header">
              <p className="track-kicker">Competitions</p>
              <h2 className="track-title">Technical, Management and Cultural Events</h2>
              <p className="track-copy">
                Explore the academic, technical, strategy-focused, and cultural events taking place across both fest days.
              </p>
            </div>

            {eventSections.map((section) => (
              <section key={section.title} id={section.title.toLowerCase().replace(/\s+/g, '-')} className="category-section">
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

          <section id="cultural-events" className="events-track events-track--cultural">
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
                loading="lazy"
                decoding="async"
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
        </>
      )}
    </div>
  );
};

export default Events;
