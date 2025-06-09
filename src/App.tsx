import './App.css';
import './index.css'
import Layout from './components/Layout';
import Navbar from './Navbar';
import Hero from './components/Hero';
import Invitation from './components/Invitation';
import About from './components/About';
import Prenup from './components/Prenup';

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
   </>
  );
}

export default App;