
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Navbar1 from './components/Navbar1';
import Hero from './components/Hero';
import Invitation from './components/Invitation';
import About from './components/About';
import Prenup from './components/Prenup';
import Video from './components/Video';
import Map from './components/Map';
import RSVPForm from './components/Rsvp';
import Footer from './components/Footer';
import DressCode from './components/DressCode';
import Entourage from './components/Entourage';

function HomePage() {
  return (
    <>
      <Navbar1 />
      <Hero />
      <Invitation />
      <About />
      <Prenup />
      <Video />
      <Map />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rsvp" element={<><Navbar1 /><RSVPForm /><Footer /></>} />
          <Route path="/DressCode" element={<><Navbar1 /><DressCode /><Footer /></>} />
          <Route path="/entourage" element={<><Navbar1 /><Entourage /><Footer /></>} />
          {/* Add other routes here */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
