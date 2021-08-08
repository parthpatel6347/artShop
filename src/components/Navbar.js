import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../firebase/utils";
import { selectCurrentUser } from "../redux/user/userSelectors";
import { selectCartHidden } from "../redux/cart/cartSelectors";
import { emptyCart } from "../redux/cart/cartActions";

import CartIcon from "./CartIcon";
import Cart from "./Cart";

import {
  NavbarContainer,
  NavbarInner,
  NavLinksContainer,
} from "../styles/NavbarStyles";

const Navbar = ({ currentUser, hidden, emptyLocalCart }) => {
  const onSignOut = () => {
    emptyLocalCart();
    auth.signOut();
  };

  return (
    <NavbarContainer>
      <NavbarInner>
        <Link to="/">
          <h3>artShop</h3>
        </Link>
        <NavLinksContainer>
          <Link to="/explore">Explore</Link>
          {currentUser ? (
            <>
              <div onClick={onSignOut}>Sign Out</div>
              <Link to="/orders">Orders</Link>
            </>
          ) : (
            <Link to="/signin">Sign In</Link>
          )}
          <CartIcon />
        </NavLinksContainer>
        {hidden ? null : <Cart />}
      </NavbarInner>
    </NavbarContainer>
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
