import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { useHistory } from "react-router-dom";

// import onclickoutside helper hook
import useOnClickOutside from "../hooks/onClickOutside";

// import firebase utility
import { auth } from "../firebase/utils";

// redux imports
import { selectCurrentUser } from "../redux/user/userSelectors";
import { selectCartHidden } from "../redux/cart/cartSelectors";
import {
  emptyCart,
  toggleVisibility,
  hideCart,
} from "../redux/cart/cartActions";

// import icons
import CartIcon from "./CartIcon";
import Cart from "./Cart";
import userIcon from "../svg/user.svg";

// import styled components
import {
  NavbarContainer,
  NavbarInner,
  NavLinksContainer,
  ShopTitle,
  NavLink,
  UserIconContiner,
  NavLinkExplore,
  LogoStyled,
  UserMenuContainer,
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
  useOnClickOutside(cartContainer, () => (hidden ? null : hideCart()));


  const history = useHistory();

  // empty redux state for cart, signout and redirect to sign in page
  const onSignOut = async () => {
    emptyLocalCart();
    await auth.signOut()
    history.push("/signin")
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
                style={{ backgroundColor: !open ? "" : "#EDE5D9" }}
                to=""
              >
                <UserIconContiner>
                  <img src={userIcon} alt="user" />
                </UserIconContiner>
                <span>{currentUser.displayName}</span>
              </NavLink>
              <CSSTransition
                in={open}
                timeout={300}
                classNames="fade"
                unmountOnExit
              >
                <UserMenuContainer style={{ position: "relative" }}>
                  <UserDropDown
                    signOut={onSignOut}
                    toggleDropdown={handleDropdown}
                  />
                </UserMenuContainer>
              </CSSTransition>
            </div>
          ) : (
            <>
              <NavLink to="/signin">Log in</NavLink>
            </>
          )}
          <div ref={cartContainer} style={{ height: "100%" }}>
            <NavLink
              onClick={toggleCartVisibility}
              style={{ backgroundColor: hidden ? "" : "#EDE5D9" }}
              to=""
            >
              <CartIcon />
            </NavLink>
            <CSSTransition
              in={!hidden}
              timeout={300}
              classNames="fade"
              unmountOnExit
            >
              <Cart />
            </CSSTransition>
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
