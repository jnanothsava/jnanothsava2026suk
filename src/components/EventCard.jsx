import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './EventCard.css';

const EventCard = ({ event }) => {
  const preview =
    event.description.length > 115
      ? `${event.description.substring(0, 115).trim()}...`
      : event.description;

  return (
    <Link to={`/events/${event.id}`} className="event-card glass-panel">
      <div className="event-card-category">{event.category}</div>
      <h3 className="event-card-title">{event.title}</h3>
      <p className="event-card-meta">{event.date} | {event.time}</p>
      <p className="event-card-desc">{preview}</p>
      <div className="event-card-footer">
        View Details <ArrowRight size={16} />
      </div>
    </Link>
  );
};

export default EventCard;
