import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import useOnClickOutside from "../hooks/onClickOutside";

import { auth } from "../firebase/utils";
import { selectCurrentUser } from "../redux/user/userSelectors";
import { selectCartHidden } from "../redux/cart/cartSelectors";
import {
  emptyCart,
  toggleVisibility,
  hideCart,
} from "../redux/cart/cartActions";

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
  NavLinkExplore,
  LogoStyled,
} from "../styles/NavbarStyles";
import UserDropDown from "./UserDropDown";

const Navbar = ({
  currentUser,
  hidden,
  emptyLocalCart,
  toggleCartVisibility,
  hideCart,
}) => {
  //User dropdown open/close
  const [open, setOpen] = useState(false);
  const dropDownContainer = useRef();
  useOnClickOutside(dropDownContainer, () => setOpen(false));

  const handleDropdown = () => {
    setOpen(!open);
  };

  //Cart open/close
  const cartContainer = useRef();
  useOnClickOutside(cartContainer, hideCart);

  const onSignOut = () => {
    emptyLocalCart();
    auth.signOut();
  };

  return (
    <NavbarContainer>
      <NavbarInner>
        <ShopTitle to="/">
          <LogoStyled />
          artShop
        </ShopTitle>
        <NavLinksContainer>
          <NavLinkExplore to="/explore">Explore</NavLinkExplore>
          {currentUser ? (
            <div ref={dropDownContainer} style={{ height: "100%" }}>
              <NavLink
                onClick={handleDropdown}
                style={{ backgroundColor: !open ? "" : "#f5f0e6" }}
              >
                <UserIconContiner>
                  <UserIcon />
                </UserIconContiner>
                <span>{currentUser.displayName}</span>
              </NavLink>
              {open && (
                <div style={{ position: "relative" }}>
                  <UserDropDown
                    signOut={onSignOut}
                    toggleDropdown={handleDropdown}
                  />
                </div>
              )}
            </div>
          ) : (
            <>
              <NavLink to="/signin">Log in</NavLink>
            </>
          )}
          <div ref={cartContainer} style={{ height: "100%" }}>
            <NavLink
              onClick={toggleCartVisibility}
              style={{ backgroundColor: hidden ? "" : "#f5f0e6" }}
            >
              <CartIcon />
            </NavLink>
            {!hidden && <Cart />}
          </div>
        </NavLinksContainer>
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
  toggleCartVisibility: () => dispatch(toggleVisibility()),
  hideCart: () => dispatch(hideCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
