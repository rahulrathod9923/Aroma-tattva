import React, { useState } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Videos from './components/footer/Videos';
import About from './components/header/About';
import Navbar from './components/header/Navbar';
import FlatListAd from './components/products/FlatListAd';
import ProductList from './components/products/ProductList';
import axios from 'axios';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleMenuClick = () => {
    setIsMenuClicked(true);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.get('http://localhost:3001/users');
      const user = response.data.find(
        (user) => user.username === username && user.password === password
      );
      if (user) {
        setIsLoggedIn(true);
        setError('');
        setIsMenuClicked(false);
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      setError('Error connecting to server');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleCloseMenu = () => {
    setIsMenuClicked(false);
  };

  return (
    <>
      <Navbar
        isLoggedIn={isLoggedIn}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
        isMenuClicked={isMenuClicked}
        handleMenuClick={handleMenuClick}
        handleCloseMenu={handleCloseMenu}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        error={error}
      />
      <FlatListAd />
      <About />
      <ProductList />
      <Videos />
      <Footer />
    </>
  );
}

export default App;
