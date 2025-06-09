import '../assets/styles/About.css';

const App = () => {
  return (
    <div className="aboutus-wrapper">
      <div className="aboutus-card">
        <div className="aboutus-image-wrapper">
          <img
            src="/images/about.png"
            alt="Team"
            className="aboutus-image"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "https://placehold.co/64x64/CCCCCC/333333?text=Error";
            }}
          />
        </div>

        <div className="aboutus-card-content">
          <div className="aboutus-heading-group">
            <div>
              <p className="aboutus-heading">"Our Love Story"</p>
            </div>
          </div>

          <hr className="aboutus-divider" />

          <div>
            <p className="aboutus-subtext">
            From a simple hello to a lifetime of memories, our love story is one written in laughter, patience, and dreams shared beneath the stars. As we step into this beautiful new chapter together, we carry with us the warmth of our families, the joy of friendship, and the promise of forever. This day is not just about us—it's a celebration of love, faith, and the magic of two hearts becoming one.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
