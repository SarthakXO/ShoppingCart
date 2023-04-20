import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <Link className="links" to="/">
          Home
        </Link>
        <Link className="links" to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
