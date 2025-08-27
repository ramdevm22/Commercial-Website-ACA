import React from "react";
import "./Cart.css";

const Cart = ({ cart, removeFromCart }) => {
  //   let totalPrice = 0;
  //   cart.forEach((item) => {
  //     totalPrice += item.price;
  //   });

  const totalPrice = cart.reduce(
    (total, item) => parseInt(total) + parseInt(item.price),
    0
  );

  return (
    <div className="cart">
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.path} alt="" />
              <div className="details">
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="total-price">
            <h3>Total Price: ${totalPrice}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
