import React from 'react';
import '../assets/styles/Invitation.css'; // Adjust path if needed

const Invitation: React.FC = () => {
  const backgroundImage = '/images/invitationbg.avif';

  return (
    <div
      className="invitation-hero"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="invitation-overlay"></div>

      <div className="invitation-content">
        <h1 className="invitation-title">Our journey to <br/>forever!</h1>
        <p className="invitation-message">
        Julian & Christine joyfully invite you to celebrate their wedding day — a celebration of love, laughter, and the beginning of forever.
        </p>
      </div>
    </div>
  );
};

export default Invitation;
