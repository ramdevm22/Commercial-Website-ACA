import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import Favourites from "./pages/Products/Favourites";
import products from "./pages/Products/Products";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Popup from "./components/Popup";
import "./components/Header.css";
import "./App.css";
import "./pages/Auth/Login.css";
import "./pages/Auth/Register.css";

const App = () => {
  const [cart, setCart] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [popupMessage, setPopupMessage] = useState("");

  useEffect(() => {
    // Load cart and favourites from local storage
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const storedFavourites =
      JSON.parse(localStorage.getItem("favourites")) || [];
    setCart(storedCart);
    setFavourites(storedFavourites);
  }, []);

  useEffect(() => {
    // Save cart and favourites to local storage
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [cart, favourites]);

  const addToCart = (product) => {
    if (cart.find((item) => item.id === product.id)) {
      showPopup(`${product.name} is already in the cart`);
    } else {
      setCart([...cart, product]);
      showPopup(`${product.name} added to cart`);
    }
  };

  const addToFavourites = (product) => {
    if (favourites.find((item) => item.id === product.id)) {
      showPopup(`${product.name} is already in favourites`);
    } else {
      setFavourites([...favourites, product]);
      showPopup(`${product.name} added to favourites`);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const removeFromFavourites = (id) => {
    setFavourites(favourites.filter((item) => item.id !== id));
  };

  const showPopup = (message) => {
    setPopupMessage(message);
    setTimeout(() => {
      setPopupMessage("");
    }, 3000);
  };

  return (
    <div className="app">
      <Header cartCount={cart.length} favouritesCount={favourites.length} />
      <div className="content">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                products={products}
                addToCart={addToCart}
                addToFavourites={addToFavourites}
              />
            }
          />
          <Route
            path="/shop"
            element={
              <Shop
                products={products}
                addToCart={addToCart}
                addToFavourites={addToFavourites}
              />
            }
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} removeFromCart={removeFromCart} />}
          />
          <Route
            path="/favourites"
            element={
              <Favourites
                favourites={favourites}
                removeFromFavourites={removeFromFavourites}
              />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      {popupMessage && <Popup message={popupMessage} />}
    </div>
  );
};

export default App;
