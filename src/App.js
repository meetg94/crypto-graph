import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Contact from './Components/Pages/Contact'
import CryptoChart from './Components/CryptoChart';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/coin/:id" element={<CryptoChart/>} />
      </Routes>      
    </div>
  );
}

export default App;
