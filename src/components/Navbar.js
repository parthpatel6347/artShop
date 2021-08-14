import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../firebase/utils";
import { selectCurrentUser } from "../redux/user/userSelectors";
import { selectCartHidden } from "../redux/cart/cartSelectors";
import { emptyCart } from "../redux/cart/cartActions";

import CartIcon from "./CartIcon";
import Cart from "./Cart";
import { ReactComponent as Logo } from "../svg/logo.svg";

import {
  NavbarContainer,
  NavbarInner,
  NavLinksContainer,
  ShopTitle,
  NavLink,
} from "../styles/NavbarStyles";

const Navbar = ({ currentUser, hidden, emptyLocalCart }) => {
  const onSignOut = () => {
    emptyLocalCart();
    auth.signOut();
  };

  return (
    <NavbarContainer>
      <NavbarInner>
        <ShopTitle to="/">
          <Logo style={{ marginRight: "15px" }} />
          artShop
        </ShopTitle>
        <NavLinksContainer>
          <NavLink to="/explore">explore</NavLink>
          {currentUser ? (
            <>
              <div onClick={onSignOut}>Sign Out</div>
              <NavLink to="/orders">Orders</NavLink>
            </>
          ) : (
            <NavLink to="/signin">login</NavLink>
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
