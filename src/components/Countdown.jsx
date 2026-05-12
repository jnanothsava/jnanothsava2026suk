import React, { useState, useEffect } from 'react';
import './Countdown.css';

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    timerComponents.push(
      <div className="countdown-item glass-panel" key={interval}>
        <span className="countdown-value">{timeLeft[interval].toString().padStart(2, '0')}</span>
        <span className="countdown-label">{interval}</span>
      </div>
    );
  });

  return (
    <div className="countdown-container">
      <div className="countdown-timer">
        {timerComponents.length ? timerComponents : <span>Event has started!</span>}
      </div>
    </div>
  );
};

export default Countdown;
