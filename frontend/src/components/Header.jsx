import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineShoppingBag } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { IoMdLogIn } from "react-icons/io";
import { MdOutlineAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";
const Header = ({ cartCount, favouritesCount }) => {
  return (
    <header className="navbar">
      <Link to="/">
        <AiOutlineHome className="nav-icon" />
      </Link>
      <Link to="/shop">
        <MdOutlineShoppingBag className="nav-icon" />
      </Link>
      <Link to="/cart">
        <MdOutlineShoppingCart className="nav-icon" />
        {cartCount > 0 && <sup>{cartCount}</sup>}
      </Link>
      <Link to="/favourites">
        <FiHeart className="nav-icon" />
        {favouritesCount > 0 && <sup>{favouritesCount}</sup>}
      </Link>
      <div>
        <Link to="/login">
          <IoMdLogIn className="nav-icon" />
        </Link>
        <Link to="/register">
          <MdOutlineAccountCircle className="nav-icon" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
