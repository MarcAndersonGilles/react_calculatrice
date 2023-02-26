import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'; ///, Routes, Route

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
// import About from './components/About';

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Navbar />
          {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes> */}
        </div>
        <Home/>
        <div>
        </div>
        <div className=''>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
