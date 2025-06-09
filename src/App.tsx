import './App.css';
import './index.css'
import Layout from './components/Layout';
import Navbar from './Navbar';
import Hero from './components/Hero';
import Invitation from './components/Invitation';
import About from './components/About';

function App() {
  return (
   <>
   <Layout>
   <Navbar/>
   <Hero/>
   <Invitation/>
   <About/>
   </Layout>
   </>
  );
}

export default App;