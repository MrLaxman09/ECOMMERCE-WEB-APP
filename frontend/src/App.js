import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/Footer/Footer';
import men_banner from "./components/Assets/Frontend_Assets/banner_mens.png";
import women_banner from "./components/Assets/Frontend_Assets/banner_women.png";
import kids_banner from "./components/Assets/Frontend_Assets/banner_kids.png";

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner={men_banner} Category="men" />} />
          <Route path="/womens" element={<ShopCategory banner={women_banner} Category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kids_banner} Category="kid" />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/product" element={<Product />} >
            <Route path="/product/:productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>

  );
}

export default App;
