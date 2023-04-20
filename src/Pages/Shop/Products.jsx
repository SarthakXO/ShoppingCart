import React, { useContext } from "react";
import { shopContext } from "../../context/shop-context";

const Products = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(shopContext);
  const cartItemAmount = cartItems[id];
  return (
    <div className="product">
      <img src={productImage} alt="" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add to cart{cartItemAmount > 0 && <>({cartItems[id]})</>}
      </button>
    </div>
  );
};

export default Products;
