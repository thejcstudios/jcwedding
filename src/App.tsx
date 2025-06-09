import './App.css';
import './index.css'
import Layout from './components/Layout';
import Navbar1 from './components/Navbar1';
import Hero from './components/Hero';
import Invitation from './components/Invitation';
import About from './components/About';
import Prenup from './components/Prenup';
import Video from './components/Video';

function App() {
  return (
   <>
   <Layout>
   <Navbar1/>
   <Hero/>
   <Invitation/>
   <About/>
   <Prenup/>
   </Layout>
   <Video/>;
   </>
  );
}

export default App;