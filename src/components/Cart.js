import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

//redux imports
import { selectCartItems } from "../redux/cart/cartSelectors";
import { selectCurrentUser } from "../redux/user/userSelectors";
import { hideCart } from "../redux/cart/cartActions";

//import styled components
import {
  CartMenuItemsContainer,
  CartMenuMain,
  CheckoutButton,
} from "../styles/NavbarStyles";

import CartMenuItem from "./CartMenuItem";


const Cart = ({ cartItems, history, hideCart, currentUser }) => {

  // redirect to checkout page if user is authenticated, else redirect to sign in page
  const handleCheckoutClick = () => {
    hideCart();
    if (!currentUser) {
      history.push("/signin");
    } else {
      history.push("/checkout");
    }
  };

  return (
    <CartMenuMain>
      <CartMenuItemsContainer>
        {cartItems.length ? (
          cartItems.map((item) => <CartMenuItem key={item.id} item={item} />)
        ) : (
          <p>Your cart is empty</p>
        )}
      </CartMenuItemsContainer>
      <CheckoutButton onClick={handleCheckoutClick}>Checkout</CheckoutButton>
    </CartMenuMain>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  hideCart: () => dispatch(hideCart()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));
