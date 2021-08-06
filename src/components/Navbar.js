import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../firebase/utils";
import { selectCurrentUser } from "../redux/user/userSelectors";
import { selectCartHidden } from "../redux/cart/cartSelectors";
import { emptyCart } from "../redux/cart/cartActions";

import CartIcon from "./CartIcon";
import Cart from "./Cart";

const Navbar = ({ currentUser, hidden, emptyLocalCart }) => {
  const onSignOut = () => {
    emptyLocalCart();
    auth.signOut();
  };

  return (
    <div>
      <Link to="/">
        <h3>artShop</h3>
      </Link>
      <div>
        <Link to="/explore">Explore</Link>
        {currentUser ? (
          <div>
            <div onClick={onSignOut}>Sign Out</div>
            <Link to="/orders">Orders</Link>
          </div>
        ) : (
          <Link to="/signin">Sign In</Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <Cart />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  hidden: selectCartHidden(state),
});

const mapDispatchToProps = (dispatch) => ({
  emptyLocalCart: () => dispatch(emptyCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
