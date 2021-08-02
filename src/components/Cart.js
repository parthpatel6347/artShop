import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { selectCartItems } from "../redux/cart/cartSelectors";
import { toggleVisibility } from "../redux/cart/cartActions";

const Cart = ({ cartItems, history, toggleCartVisibility }) => {
  const handleCheckoutClick = () => {
    history.push("/checkout");
    toggleCartVisibility();
  };

  return (
    <div style={{ backgroundColor: "blue", height: "400px", width: "200px" }}>
      {cartItems.length ? (
        cartItems.map((item) => <h4>{item.title}</h4>)
      ) : (
        <p>Your cart is empty</p>
      )}
      <button onClick={handleCheckoutClick}>Checkout</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartVisibility: () => dispatch(toggleVisibility()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));
