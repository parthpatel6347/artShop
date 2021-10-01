import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import useOnClickOutside from "../hooks/onClickOutside";

import { auth } from "../firebase/utils";
import { selectCurrentUser } from "../redux/user/userSelectors";
import { selectCartHidden } from "../redux/cart/cartSelectors";
import { emptyCart } from "../redux/cart/cartActions";

import CartIcon from "./CartIcon";
import Cart from "./Cart";
import { ReactComponent as Logo } from "../svg/logo.svg";
import { ReactComponent as UserIcon } from "../svg/user.svg";

import {
  NavbarContainer,
  NavbarInner,
  NavLinksContainer,
  ShopTitle,
  NavLink,
  UserIconContiner,
} from "../styles/NavbarStyles";
import UserDropDown from "./UserDropDown";

const Navbar = ({ currentUser, hidden, emptyLocalCart }) => {
  const [open, setOpen] = useState(false);

  const dropDownContainer = useRef();

  useOnClickOutside(dropDownContainer, () => setOpen(false));

  const handleDropdown = () => {
    setOpen(!open);
  };

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
              <div style={{ display: "flex" }} onClick={handleDropdown}>
                <UserIconContiner>
                  <UserIcon />
                </UserIconContiner>
                <NavLink as="span">{currentUser.displayName}</NavLink>
              </div>
              {open && (
                <div ref={dropDownContainer} style={{ position: "relative" }}>
                  <UserDropDown
                    signOut={onSignOut}
                    toggleDropdown={handleDropdown}
                  />
                </div>
              )}
            </>
          ) : (
            <>
              <NavLink to="/signin">login</NavLink>
            </>
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
