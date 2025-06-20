// src/components/Hero.tsx (or wherever your Hero component is)
import React, { useEffect, useState } from 'react';
import useScrollEffect from '../hooks/useScrollReveal'; // Import the custom hook
import '../assets/styles/Hero.css';

const Hero: React.FC = () => {
  const backgroundImage = '/images/herobg.webp';
  // Use the custom hook, specifying the type of element and optional parameters
  // Here, we want it to trigger once and for the whole container to be visible
  const contentRef = useScrollEffect<HTMLDivElement>(0.5, true); 

  const calculateTimeLeft = () => {
    const difference = +new Date('2025-06-30T00:00:00') - +new Date();
    let timeLeft = {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
    };

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="background-container"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="overlay"></div>

      <div className="content-container" ref={contentRef}> {/* Attach the ref here */}
        <h1 className="couple-names">Julian and Christine</h1>
        <p className="wedding-date">June 30, 2025</p>

        <h1 className="main-heading">Two Hearts, One Journey</h1>

        <p className="paragraph-text">
          Join us as we celebrate the beginning of forever. 
          With love in our hearts and joy in our souls, 
          we invite you to witness the union of our lives
          and the start of our beautiful adventure together.
        </p>

        <div className="countdown-timer">
          <span>{timeLeft.days}d</span> :
          <span>{timeLeft.hours}h</span> :
          <span>{timeLeft.minutes}m</span> :
          <span>{timeLeft.seconds}s</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;