import React from 'react';

// Main App component
const navbar: React.FC = () => {
  return (
    // Style block for custom CSS
    <>
      <div className="app-container">
        {/* Navigation Bar */}
        <nav className="navbar">
          {/* Brand/Logo */}
          <div className="logo">
            My App
          </div>
          {/* Navigation Links (flex for mobile spacing) */}
          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default navbar;
