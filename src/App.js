import React from 'react';
import './App.css'
import Navbar from './components/inc/Navbar';
import Home from './components/pages/Home';
import Articles from './components/pages/Articles';
import Profile from './components/pages/Profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;