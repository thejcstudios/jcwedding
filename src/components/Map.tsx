import '../assets/styles/Map.css'; // Import the CSS file


function Map() {
  const mapLink1 = 'https://maps.app.goo.gl/736K23RwTwGKEoxg6';
  const mapLink2 = 'https://maps.app.goo.gl/restaurant-example';

  return (
    <div className="map-app-container">
      <header className="map-hero-section">
        <h1>Guiding You to Our Ceremony & Reception</h1>
        <img
          src="/images/line1.png"
          alt="line"
          className="map-header-image"
        />
        <p className="map-intro-paragraph">
        "Please be guided accordingly — here are the locations of our wedding ceremony and reception celebration."
        </p>
      </header>

      <section className="map-content-section">
        <div className="map-bordered-container">
          <h2>Our Lady Of Lourdes In Tagaytay</h2>
        </div>
        <img
          src="/images/church.webp"
          alt="Lush Gardens"
          className="map-section-image"
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
          <h2>Hillbarn Tagaytay Events Place</h2>
        </div>
        <img
          src="/images/reception.webp"
          alt="Signature Restaurant"
          className="map-section-image"
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
