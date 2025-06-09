import { Link } from 'react-router-dom';
import '../assets/styles/Navbar1.css';

function Navbar1() {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Rsvp', href: '/rsvp' },
    { name: 'Dress Code', href: '/dresscode' },
    { name: 'Entourage', href: '/entourage' },
  ];

  return (
    <div className="main-layout">
      <nav className="header-nav">
        <div className="nav-content">
          <div className="site-logo">
            <Link to="/">Julian and Christine Wedding</Link>
          </div>

          <div className="main-nav">
            <div className="nav-links-list">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.href}>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar1;
