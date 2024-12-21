import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home'; // Početna stranica
import About from './about'; // Stranica "O nama"
import Registracija from './registracija';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Početna stranica */}
        <Route path="/o-nama" element={<About />} /> {/* Stranica "O nama" */}
        <Route path="/registracija" element={<Registracija />} /> {/* Stranica "Registracija" */}
      </Routes>
    </Router>
  );
}

export default App;