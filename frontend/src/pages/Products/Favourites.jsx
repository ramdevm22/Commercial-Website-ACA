import React from "react";

const Favourites = ({ favourites, removeFromFavourites }) => {
  return (
    <div className="favourites cart">
      {favourites.length === 0 ? (
        <p>No favourites yet.</p>
      ) : (
        favourites.map((item) => (
          <div key={item.id} className="favourite-item cart-item">
            <img src={item.path} alt="" />
            <div className="details">
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <button onClick={() => removeFromFavourites(item.id)}>
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Favourites;
