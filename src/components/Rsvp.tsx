import { useState } from 'react';
import '../assets/styles/Rsvp.css';

const RSVPForm = () => {
  const [iframeLoading, setIframeLoading] = useState(true);
  const [iframeError, setIframeError] = useState(false);

  const googleFormEmbedUrl =
    'https://docs.google.com/forms/d/e/1FAIpQLScI0_Bl26vjllq1hEDMVvig2Mq4gw3aP2-GodYxqGZv4SXMDg/viewform?embedded=true';

  return (
    <div className="rsvp-container">
      <div className="rsvp-box">
        {iframeLoading && !iframeError && (
          <div className="loading-container">
            {/* loading spinner SVG */}
            <p className="loading-text">Loading form...</p>
          </div>
        )}

        {iframeError && (
          <div className="error-message">
            <p>Failed to load Google Form.</p>
            <p className="error-subtext">Please check the URL or your internet connection.</p>
          </div>
        )}

        <iframe
          src={googleFormEmbedUrl}
          title="Google Form RSVP"
          className={`rsvp-iframe ${iframeLoading || iframeError ? 'hidden' : ''}`}
          onLoad={() => setIframeLoading(false)}
          onError={() => {
            setIframeLoading(false);
            setIframeError(true);
          }}
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
        >
          Loading...
        </iframe>
      </div>
    </div>
  );
};

export default RSVPForm;
