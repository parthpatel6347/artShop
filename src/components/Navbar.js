import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../firebase/utils";
import CartIcon from "./CartIcon";
import Cart from "./Cart";

const Navbar = ({ currentUser, hidden }) => {
  return (
    <div>
      <Link to="/">
        <h3>artShop</h3>
      </Link>
      <div>
        <Link to="/explore">Explore</Link>
        {currentUser ? (
          <div onClick={() => auth.signOut()}>Sign Out</div>
        ) : (
          <Link to="/signin">Sign In</Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <Cart />}
    </div>
  );
};

const mapStateToPropes = (state) => ({
  currentUser: state.user.currentUser,
  hidden: state.cart.hidden,
});

export default connect(mapStateToPropes)(Navbar);
