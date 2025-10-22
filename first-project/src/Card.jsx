import React from "react";
import { product } from "./product";

function Card({ cart, setCart }) {
  const products = product[0].products;

  const handleAddToCart = (item) => {
    setCart((prev) => {
      const prevQty = prev[item.id]?.quantity || 0;
      return {
        ...prev,
        [item.id]: { item, quantity: prevQty + 1 },
      };
    });
  };

  const handleIncrease = (id) => {
  setCart((prev) => ({
    ...prev,
    [id]: { ...prev[id], quantity: prev[id].quantity + 1 }
  }));
};

  const handleDecrease = (id) => {
  setCart((prev) => {
    const newCart = { ...prev };
    if (newCart[id].quantity > 1) newCart[id].quantity -= 1;
    else delete newCart[id];
    return newCart;
  });
};
  return (
    <div className="flex flex-wrap justify-center gap-8 p-10 bg-base-200">
      {products.map((item) => (
        <div
          key={item.id}
          className="card bg-base-100 w-80 shadow-xl hover:shadow-2xl transition-shadow"
        >
          <figure>
            <img
              src={item.images[0]}
              alt={item.title}
              className="h-56 w-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.title}</h2>
            <p className="text-sm text-gray-500">{item.description}</p>
            <div className="card-actions justify-between items-center mt-3">
              <span className="font-semibold text-lg text-primary">
                ${item.price}
              </span>

              {cart[item.id] ? (
                <div className="flex items-center gap-2">
                  <button
                    className="btn btn-sm btn-outline"
                    onClick={() => handleDecrease(item.id)}
                  >
                    -
                  </button>
                  <span className="font-semibold">{cart[item.id].quantity}</span>
                  <button
                    className="btn btn-sm btn-outline"
                    onClick={() => handleIncrease(item.id)}
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
