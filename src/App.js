import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DisplayPage from './pages/DisplayPage';
import Place from './pages/Place';
import Home from './pages/Home';
import SuggestedPlaces from './components/SuggestedPlaces';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element = {<Login />} />
      <Route path='/home' element = {<Home />} />
      <Route path='/display' element = {<DisplayPage />} />
      <Route path='/place' element = {<Place />} />
    </Routes>
  </BrowserRouter>
);
}

export default App;
