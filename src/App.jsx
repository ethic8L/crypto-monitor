import React from 'react';
import {Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Home from './pages/Home/Home';
import Coin from './pages/Coin/Coin';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:coinId" element={<Coin />} />
        <Route path="/news" element={<News />} /> 
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
