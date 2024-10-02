import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HiddenGems from './pages/HiddenGems.jsx';
import Place from './pages/Place.jsx';
import Home from './pages/Home.jsx';
import Family from './pages/Family.jsx';
import Explore from './pages/Explore.jsx';
import Historical from './pages/HistoricalPlaces.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Cafe from './pages/Cafe.jsx';
import Sports from './pages/Sports.jsx';
import Working_spaces from './pages/Working_spaces.jsx';


function App() {
  return (
    <BrowserRouter>
    <div className='full'>
    <Header />
      <div className='main'>
    <Routes>
      <Route index element = {<Home />} />
      <Route path='/home' element = {<Home />} />
      <Route path='/family' element = {<Family />} />
      <Route path='/explore' element = {<Explore />} />
      <Route path='/pages/HiddenPlaces' element = {<HiddenGems />} />
      <Route path='/pages/historical' element = {<Historical />} />
      <Route path='/pages/Cafe' element={<Cafe />} />
      <Route path='/pages/Sports' element={<Sports />} />
      <Route path='/pages/Working_spaces' element = {<Working_spaces />} />

      <Route path='/place/:placeName' element={<Place />} />
      </Routes>
      </div>
      <Footer />
      </div>
  </BrowserRouter>
);
}

export default App;
