import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { shopContext } from "../../context/shop-context";
import { useNavigate } from "react-router-dom";
import { CartItem } from "./CartItem";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(shopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>Your Cart</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>
            Subtotal:$<b>{totalAmount}</b>
          </p>
          <button onClick={() => navigate("/")}> Continue Shopping</button>
          <button> Checkout</button>
        </div>
      ) : (
        <h1>Your Cart is Empty</h1>
      )}
    </div>
  );
};

export default Cart;
