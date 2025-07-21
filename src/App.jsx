
import './App.css'
import Button from 'react-bootstrap/Button';
import Navbar from './nav/Navbar';
import Home from './home/Home';
import Menu from './menu/Menu';
import About from './about/About';
import Footer from './footer/Footer';

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Menu />
      <About />
      <Footer />
      {/* other content can go here */}
    </>
  )
}

export default App
