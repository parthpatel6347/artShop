import React from "react";
import { connect } from "react-redux";
import { toggleVisibility } from "../redux/cart/cartActions";
import { selectCartItems } from "../redux/cart/cartSelectors";

const CartIcon = ({ toggleCartVisibility, cartItems }) => {
  return (
    <span onClick={toggleCartVisibility}>
      Cart <span>{cartItems.length}</span>
    </span>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartVisibility: () => dispatch(toggleVisibility()),
});

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
