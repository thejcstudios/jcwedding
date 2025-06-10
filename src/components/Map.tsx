
import '../assets/styles/Map.css'; // Import the CSS file
import useScrollEffect from '../hooks/useScrollReveal'; // Import your custom hook

function Map() {
  const mapLink1 = 'https://maps.app.goo.gl/736K23RwTwGKEoxg6';
  const mapLink2 = 'https://maps.app.goo.gl/restaurant-example';

  // Apply the scroll effect to each text element
  // Setting threshold to 0.1 and triggerOnce to true for a one-time animation
  const headingRef = useScrollEffect<HTMLHeadingElement>(0.1, true);
  const introParagraphRef = useScrollEffect<HTMLParagraphElement>(0.1, true);
  const churchHeadingRef = useScrollEffect<HTMLHeadingElement>(0.1, true);
  const receptionHeadingRef = useScrollEffect<HTMLHeadingElement>(0.1, true);


  return (
    <div className="map-app-container">
      <header className="map-hero-section">
        <h1 ref={headingRef}>Guiding You to Our Ceremony & Reception</h1>
        <img
          src="/images/line1.png"
          alt="line"
          className="map-header-image"
          onError={(e) => { // Added error handling for image
            e.currentTarget.onerror = null;
            e.currentTarget.src = "https://placehold.co/64x64/CCCCCC/333333?text=Error";
          }}
        />
        <p className="map-intro-paragraph" ref={introParagraphRef}>
        "Please be guided accordingly — here are the locations of our wedding ceremony and reception celebration."
        </p>
      </header>

      <section className="map-content-section">
        <div className="map-bordered-container">
          <h2 ref={churchHeadingRef}>Our Lady Of Lourdes In Tagaytay</h2>
        </div>
        <img
          src="/images/church.webp"
          alt="Lush Gardens"
          className="map-section-image"
          onError={(e) => { // Added error handling for image
            e.currentTarget.onerror = null;
            e.currentTarget.src = "https://placehold.co/64x64/CCCCCC/333333?text=Error";
          }}
        />
        <div className="map-map-link-container">
          <a
            href={mapLink1}
            target="_blank"
            rel="noopener noreferrer"
            className="map-link"
          >
            View on Google Maps
          </a>
        </div>
      </section>

      <section className="map-content-section">
        <div className="map-bordered-container">
          <h2 ref={receptionHeadingRef}>Hillbarn Tagaytay Events Place</h2>
        </div>
        <img
          src="/images/reception.webp"
          alt="Signature Restaurant"
          className="map-section-image"
          onError={(e) => { // Added error handling for image
            e.currentTarget.onerror = null;
            e.currentTarget.src = "https://placehold.co/64x64/CCCCCC/333333?text=Error";
          }}
        />
        <div className="map-map-link-container">
          <a
            href={mapLink2}
            target="_blank"
            rel="noopener noreferrer"
            className="map-link"
          >
            View on Google Maps
          </a>
        </div>
      </section>
    </div>
  );
}

export default Map;