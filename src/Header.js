import React, { useEffect } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {

  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }
  return (
    <div className="header">
      <Link to="/">
      <img
        className="header_logo"
        src="https://www.freepnglogos.com/uploads/circle-png/red-round-clip-art-download-12.png"
        alt="Amazon"
      />
      </Link>
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <FontAwesomeIcon icon={faSearch} className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to={!user && "/login"}>
        <div onClick={handleAuthentication} className="header_option">
          <span className="header_optionLineOne">Hello, {!user ? 'Guest' : user.email}</span>
          <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
        </div>
        </Link>

        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">&amp; Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
        <div className="header_optionBasket">
          <FontAwesomeIcon icon={faShoppingBasket} />
          <span className="header_optionLineTwo header_basketCount"> {basket?.length}</span>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
