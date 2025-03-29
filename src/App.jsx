import React from 'react';
import {Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Home from './pages/Home/Home';
import Coin from './pages/Coin/Coin';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './pages/Auth/login/Login';
import Signup from './pages/Auth/signup/Signup';


const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/coin/:coinId" element={<Coin />} />
        <Route path="/news" element={<News />} /> 
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
