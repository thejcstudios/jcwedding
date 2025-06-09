import '../assets/styles/Navbar.css'

// Main App component containing the Navbar
function App() {
  // Define navigation links
  const navLinks = [
    { name: 'Our Story', href: '#' },
    { name: 'Ceremony', href: '#' },
    { name: 'Reception', href: '#' },
    { name: 'RSVP', href: '#' },
    { name: 'Gallery', href: '#' },
  ];

  return (
    <div className="main-layout">
     
      <nav className="header-nav">
        <div className="nav-content">
          {/* Logo/Site Title */}
          <div className="site-logo">
            <a href="#">
              Julian and Christine Wedding
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="main-nav">
            <div className="nav-links-list">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
