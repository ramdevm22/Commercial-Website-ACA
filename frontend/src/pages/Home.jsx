import { useState, useEffect } from "react";
import "./Home.css";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";

const Home = ({ products, addToCart, addToFavourites }) => {
  const featuredProducts = products.slice(0, 6);

  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProductIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [products.length]);

  const handleNextProduct = () => {
    setCurrentProductIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const currentProduct = products[currentProductIndex];

  return (
    <>
      <div className="home">
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
        <div className="right-content">
          <div className="featured-product-card">
            <img src={currentProduct.path} alt="" />
            <h3>{currentProduct.name}</h3>
            <p>${currentProduct.price}</p>
            <button
              className="cart-button"
              onClick={() => addToCart(currentProduct)}
            >
              {" "}
              <MdOutlineShoppingCart className="cart-icon" />
            </button>
            <button
              className="favourite-button"
              onClick={() => addToFavourites(currentProduct)}
            >
              <FiHeart className="favourite-icon" />
            </button>
          </div>
        </div>
        <button className="next-button" onClick={handleNextProduct}>
          ›
        </button>
      </div>
      <div className="welcome-message">
        <h2>Welcome to our e-commerce platform!</h2>
        <p>
          Explore a diverse selection of high-quality products and exclusive
          deals tailored to your needs. Enjoy a seamless shopping experience
          with us.
        </p>
      </div>
      <div className="last-home-content">
        <h1>Special Products</h1>

        <Link to="/shop">
          {" "}
          <button>Shop </button>
        </Link>
      </div>
      <div className="last-cards">
        {featuredProducts.map((product) => (
          <div key={product.id} className="last-card-content">
            <img src={product.path} alt="" />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button className="cart-button" onClick={() => addToCart(product)}>
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
    </>
  );
};

export default Home;
