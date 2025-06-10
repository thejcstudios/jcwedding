import React from 'react';
import '../assets/styles/Invitation.css'; // Adjust path if needed
import useScrollEffect from '../hooks/useScrollReveal'; // Import your custom hook

const Invitation: React.FC = () => {
  const backgroundImage = '/images/invitationbg.avif';

  // Use the hook for each text element
  const titleRef = useScrollEffect<HTMLHeadingElement>(0.1, true); 
  const messageRef = useScrollEffect<HTMLParagraphElement>(0.1, true); 

  return (
    <div
      className="invitation-hero"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="invitation-overlay"></div>

      <div className="invitation-content">
        {/* Attach refs to individual text elements */}
        <h1 className="invitation-title" ref={titleRef}>Our journey to <br/>forever!</h1>
        <p className="invitation-message" ref={messageRef}>
        Julian & Christine joyfully invite you to celebrate their wedding day — a celebration of love, laughter, and the beginning of forever.
        </p>
      </div>
    </div>
  );
};

export default Invitation;