import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { selectCartItems } from "../redux/cart/cartSelectors";
import { selectCurrentUser } from "../redux/user/userSelectors";
import { toggleVisibility } from "../redux/cart/cartActions";
import {
  CartMenuItemsContainer,
  CartMenuMain,
  CheckoutButton,
} from "../styles/NavbarStyles";
import CartMenuItem from "./CartMenuItem";

const Cart = ({ cartItems, history, toggleCartVisibility, currentUser }) => {
  const handleCheckoutClick = () => {
    if (!currentUser) {
      history.push("/signin");
    } else {
      history.push("/checkout");
    }
    toggleCartVisibility();
  };

  return (
    <CartMenuMain>
      <CartMenuItemsContainer>
        {cartItems.length ? (
          cartItems.map((item) => (
            <CartMenuItem
              title={item.title}
              image={item.image}
              price={item.price}
            />
          ))
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
  toggleCartVisibility: () => dispatch(toggleVisibility()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));
