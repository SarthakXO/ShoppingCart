import React from "react";
import { PRODUCTS } from "../../products";
import Products from "./Products";

const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Shop Now!</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product, key) => {
          return <Products key={key} data={product} />;
        })}
      </div>
    </div>
  );
};

export default Shop;
