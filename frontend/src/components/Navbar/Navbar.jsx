import React, { useState, useContext, useRef} from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../Assets/Frontend_Assets/logo.png";
import cart_icon from "../Assets/Frontend_Assets/cart_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from "../Assets/Frontend_Assets/nav_dropdown.png"
const Navbar = () => {
  const [menu, setMunu] = useState("shop");
  const { getAddToCartCount } = useContext(ShopContext);
  const menuRef = useRef();;



  const dropdown_toggle = (e) =>{
    menuRef.current.classList.toggle('nav-menu-visible');
      e.target.classList.toggle('open')
    
  }

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>BUYOU</p>
      </div>
      <img className="nav-dropdown" onClick={dropdown_toggle} src={nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => setMunu("shop")}>
          <Link className="link" to="/"> Shop </Link> {menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMunu("mens")}>
          <Link className="link" to="/mens"> Men </Link> {menu === "mens" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMunu("womens")}>
          <Link className="link" to="/womens"> Women </Link> {menu === "womens" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMunu("kids")}>
          <Link className="link" to="/kids"> Kids </Link> {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token') ? <button onClick={()=>{localStorage.removeItem('auth-token'); window.location.replace('/')}}>Logout</button>:<Link to="/login"><button>Login</button></Link>}
        <Link to="/cart"><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getAddToCartCount()}</div>
      </div>
    </div>
  );
};

export default Navbar;
