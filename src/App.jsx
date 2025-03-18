import React from 'react';
import {Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Home from './pages/Home/Home';
import Coin from './pages/Coin/Coin';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './pages/Login';
import SignUp from './pages/SignUp';



const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:coinId" element={<Coin />} />
        <Route path="/news" element={<News />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
