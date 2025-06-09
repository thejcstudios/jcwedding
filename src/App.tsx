import './App.css';
import './index.css'
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Invitation from './components/Invitation';
import About from './components/About';
import Prenup from './components/Prenup';
import Video from './components/Video';

function App() {
  return (
   <>
   <Layout>
   <Navbar/>
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