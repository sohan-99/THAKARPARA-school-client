// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navber';
import NewsTicker from './components/NewsTicker';
import HeroSection from './components/home/HeroSection';
import UpcomingEvents from './components/UpcomingEvents';
import EventDetail from './components/EventDetail';
import WisdomWords from './components/home/WisdomWords';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <NewsTicker />
        <Navbar />
        <Routes>
          <Route path="/" element={<UpcomingEvents />} />
          <Route path="/event/:id" element={<EventDetail />} />
        </Routes>
        <WisdomWords />
      </div>
    </Router>
  );
}

export default App;
