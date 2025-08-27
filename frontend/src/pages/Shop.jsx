import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import "./Home.css";
import "./Shop.css";
import Header from "../components/Header";
const Shop = ({ products, addToCart, addToFavourites }) => {
  const featuredProducts = products.slice(0, 9);
  return (
    <div className="shop-content">
      <Header />
      <div className="left-search-bar">
        <h3>Filter by categories</h3>
        <button>Phone</button>
        <button>camera</button>
        <button>Earbuds</button>
        <button>Shoes</button>
        <button>Sneakers</button>
        <button>Laptop</button>
        <button>Books</button>
        <button>Clothes</button>
        <h3>Filter by brand</h3>
        <button>Adidas</button>
        <button>apple</button>
        <button>Samsung</button>
        <button>Puma</button>
        <h3>Filter by price</h3>
        <input type="number" placeholder="Enter Price" />
        <button className="Reset-Filter">Reset Filter</button>
      </div>
      <div className="home right-content">
        <div className="product-list">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-item">
              <img src={product.path} alt="" />
              <h3 className="name">{product.name}</h3>
              <p className="rating">{product.rating}</p>
              <p className="price">${product.price}</p>
              <p className="brand">{product.brand}</p>
              <button
                className="cart-button"
                onClick={() => addToCart(product)}
              >
                <MdOutlineShoppingCart className="cart-icon" />
              </button>
              <button
                className="favourite-button"
                onClick={() => addToFavourites(product)}
              >
                <FiHeart className="favourite-icon" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
