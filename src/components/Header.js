import React from "react";
import "./Header.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import NotListedLocationIcon from "@mui/icons-material/NotListedLocation";
import RoomIcon from "@mui/icons-material/Room";
function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <h2 className="header__logoTitle">amazon.in</h2>
        <br />
        <span className="header__logoImage">⤻</span>
      </div>
      <div className="header-address">
        <NotListedLocationIcon className="location-icon" />
        <div className="nav__item">
          <span className="nav__itemLineOne">Hello</span>
          <span className="nav__itemLineTwo">Select your address</span>
        </div>
      </div>
      <div className="header__search">
        <select className="input__select">
          <option>All</option>
          <option></option>
        </select>
        <input
          type="text"
          className="header__searchInput"
          placeholder="Search Amazon.in"
        />
        <RoomIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="nav__item">
          <select className="select">
            <option>🏳️‍🌈EN</option>
            <option></option>
          </select>
        </div>
        <div className="nav__item">
          <span className="nav__itemLineOne">Hello, sign in</span>
          <span className="nav__itemLineTwo">Account & Lists</span>
        </div>
        <div className="nav__item">
          <span className="nav__itemLineOne">Returns</span>
          <span className="nav__itemLineTwo">&order</span>
        </div>
        <div className="nav__itemBasket">
          <ShoppingBasketIcon />
          <span className="nav__itemLineTwo nav__basketCount">Cart</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
