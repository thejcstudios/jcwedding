import React from 'react';
import '../assets/styles/Hero.css'

// Main App component
const Hero: React.FC = () => {
  // A placeholder image URL. In a real application, you might dynamically load this.
  const backgroundImage = '/images/herobg.jpg';

  return (
    <>

      {/* Main container with full viewport height and width, background image, and flexbox for content alignment */}
      <div
        className="background-container"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        {/* Overlay for better text readability, especially over busy images */}
        <div className="overlay"></div>

        {/* Content container aligned to the left */}
        <div className="content-container">
          {/* Main heading with a stylish cursive font and responsive sizing */}
          <h1 className="main-heading">
          Two Hearts, One Journey
          </h1>

          {/* Paragraph text with a stylish cursive font and responsive sizing */}
          <p className="paragraph-text">
          Join us as we celebrate the beginning of forever.
With love in our hearts and joy in our souls,
we invite you to witness the union of our lives
and the start of our beautiful adventure together.
          </p>

          {/* Optional: Call to Action button */}
          <button className="cta-button">
            Explore More
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
