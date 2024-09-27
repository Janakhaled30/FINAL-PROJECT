import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HiddenGems from './pages/HiddenGems';
import Place from './pages/Place';
import Home from './pages/Home';
import Family from './pages/Family';
import Explore from './pages/Explore';
import Historical from './pages/HistoricalPlaces';

function App() {
  return (
    <BrowserRouter>
    <div className='full'>
    <Routes>
      <Route index element = {<Home />} />
      <Route path='/home' element = {<Home />} />
      <Route path='/family' element = {<Family />} />
      <Route path='/explore' element = {<Explore />} />
      <Route path='/pages/HiddenPlaces' element = {<HiddenGems />} />
      <Route path='/pages/historical' element = {<Historical />} />
      <Route path='/place/:placeName' element={<Place />} />
      </Routes>
      </div>
  </BrowserRouter>
);
}

export default App;
