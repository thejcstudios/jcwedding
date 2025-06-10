import '../assets/styles/About.css';
import useScrollEffect from '../hooks/useScrollReveal'; // Assuming the hook is in this path

const App = () => {
  // Apply useScrollEffect to each text element
  // We'll set triggerOnce to true so the effect only happens once for each.
  const headingRef = useScrollEffect<HTMLParagraphElement>(0.1, true); 
  const subtextRef = useScrollEffect<HTMLParagraphElement>(0.1, true); 

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
              {/* Attach the ref to the heading */}
              <p className="aboutus-heading" ref={headingRef}>"Our Love Story"</p>
            </div>
          </div>

          <hr className="aboutus-divider" />

          <div>
            {/* Attach the ref to the subtext */}
            <p className="aboutus-subtext" ref={subtextRef}>
            From a simple hello to a lifetime of memories, our love story is one written in laughter, patience, and dreams shared beneath the stars. As we step into this beautiful new chapter together, we carry with us the warmth of our families, the joy of friendship, and the promise of forever. This day is not just about us—it's a celebration of love, faith, and the magic of two hearts becoming one.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;