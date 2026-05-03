import React from 'react';
import { Link } from 'react-router-dom';
import { eventsData } from '../data/events';
import { MapPin, ArrowRight } from 'lucide-react';
import './Schedule.css';

const parseTime = (timeStr) => {
  if (!timeStr) return 0;
  const match = timeStr.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (!match) return 0;
  let [_, hours, minutes, ampm] = match;
  hours = parseInt(hours, 10);
  if (ampm.toUpperCase() === 'PM' && hours < 12) hours += 12;
  if (ampm.toUpperCase() === 'AM' && hours === 12) hours = 0;
  return hours * 60 + parseInt(minutes, 10);
};

const Schedule = () => {
  const eventsByDate = eventsData.reduce((acc, event) => {
    if (!acc[event.date]) {
      acc[event.date] = [];
    }
    acc[event.date].push(event);
    return acc;
  }, {});

  // Sort dates
  const sortedDates = Object.keys(eventsByDate).sort((a, b) => {
    return new Date(a) - new Date(b);
  });

  // Sort events within each date by start time
  sortedDates.forEach(date => {
    eventsByDate[date].sort((a, b) => parseTime(a.time) - parseTime(b.time));
  });

  if (eventsByDate['15 May 2026']) {
    eventsByDate['15 May 2026'].push({
      id: 'live-in-concert',
      title: 'Live in Concert by Aishwarya Rangarajan',
      category: 'Special Attraction',
      time: '06:00 PM Onwards',
      venue: 'Main Stage',
      isSpecial: true
    });
  }

  return (
    <div className="container animate-fade-in page-shell">
      <div className="schedule-header">
        <h1 className="text-gradient">Interactive Schedule</h1>
        <p>Explore the complete timeline of Jnanothsava 2026. Click on any event to view its complete details, rules, and coordinators.</p>
      </div>

      <div className="timeline">
        {sortedDates.map(date => (
          <React.Fragment key={date}>
            <div className="timeline-day-header">
              <h2>{date}</h2>
            </div>
            
            {eventsByDate[date].map((event, index) => (
              <div key={event.id} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-time">{event.time}</div>
                  <div className="timeline-category">{event.category}</div>
                  <h3 className="timeline-title">{event.title}</h3>
                  <div className="timeline-venue">
                    <MapPin size={16} />
                    <span>{event.venue}</span>
                  </div>
                  {!event.isSpecial && (
                    <Link to={`/events/${event.id}`} className="timeline-link">
                      View Details <ArrowRight size={16} />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
