import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { eventsData } from '../data/events';
import { Calendar, Clock, MapPin, Users, BookOpen, Phone, Sparkles } from 'lucide-react';
import './EventDetail.css';

const EventDetail = () => {
  const { eventId } = useParams();
  const event = eventsData.find((entry) => entry.id === eventId);

  if (!event) {
    return <div className="container" style={{ padding: '6rem 1.5rem' }}>Event not found.</div>;
  }

  const posterClassName = `event-poster event-poster--${event.category.toLowerCase()}`;

  return (
    <div className="container animate-fade-in" style={{ padding: '6rem 1.5rem', maxWidth: '960px' }}>
      <div className="event-detail-header">
        <Link to="/events" style={{ color: 'var(--color-primary-light)', display: 'inline-block', marginBottom: '1rem' }}>
          &larr; Back to Events
        </Link>
        <h1 className="event-title">{event.title}</h1>

        <div className="event-meta-grid">
          <div className="meta-item"><Calendar size={20} /> {event.date}</div>
          <div className="meta-item"><Clock size={20} /> {event.time}</div>
          <div className="meta-item"><MapPin size={20} /> {event.venue}</div>
          <div className="meta-item"><Users size={20} /> {event.teamSize}</div>
        </div>
      </div>

      <div className={`${posterClassName}${event.poster ? ' event-poster--with-image' : ''}`}>
        {event.poster && (
          <img
            src={event.poster}
            alt={event.posterAlt || `${event.title} poster`}
            className="event-poster__image"
          />
        )}
        <div className="event-poster__glow" />
      </div>

      <div className="event-content-section">
        <h2><BookOpen size={24} className="text-gradient" /> About the Event</h2>
        <p className="event-body-copy">{event.description}</p>
      </div>

      {event.subEvents && event.subEvents.length > 0 && (
        <div className="event-content-section">
          <h2><Sparkles size={24} className="text-gradient" /> Sub Events</h2>
          <div className="sub-events-wrap">
            {event.subEvents.map((item) => (
              <span key={item} className="sub-event-chip">{item}</span>
            ))}
          </div>
        </div>
      )}

      {event.topics && event.topics.length > 0 && (
        <div className="event-content-section">
          <h2><Sparkles size={24} className="text-gradient" /> Topics</h2>
          <ul className="detail-list">
            {event.topics.map((topic, index) => <li key={index}>{topic}</li>)}
          </ul>
        </div>
      )}

      {event.detailsSections && event.detailsSections.length > 0 && (
        <div className="event-content-section">
          <h2><span className="text-gradient">Key Rules and Regulations</span></h2>
          <div className="detail-sections-grid">
            {event.detailsSections.map((section, index) => (
              <div key={index} className="detail-card">
                <h3>{section.title}</h3>
                <ul className="detail-list">
                  {section.items.map((item, itemIndex) => <li key={itemIndex}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {event.contacts && (
        <div className="event-content-section">
          <h2 style={{ marginBottom: '2rem' }}><Phone size={24} className="text-gradient" /> Contact Details</h2>
          <div className="contacts-grid">
            <div className="contact-card">
              <h3>Faculty Coordinators</h3>
              {event.contacts.faculty.map((faculty, index) => (
                <div key={index} className="contact-row">
                  <span>{faculty.name}</span>
                  {faculty.phone ? <a href={`tel:${faculty.phone}`}>{faculty.phone}</a> : <span>-</span>}
                </div>
              ))}
            </div>

            <div className="contact-card">
              <h3>Student Coordinators</h3>
              {event.contacts.student.length > 0 ? (
                event.contacts.student.map((student, index) => (
                  <div key={index} className="contact-row">
                    <span>{student.name}</span>
                    {student.phone ? <a href={`tel:${student.phone}`}>{student.phone}</a> : <span>-</span>}
                  </div>
                ))
              ) : (
                <p className="event-body-copy">Not listed in brochure.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventDetail;
