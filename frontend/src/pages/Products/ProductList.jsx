import React from "react";

const ProductList = ({ products, addToCart, addToFavourites }) => {
  return (
    <div className="product-list">
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
          <button onClick={() => addToFavourites(product)}>
            Add to Favourites
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
