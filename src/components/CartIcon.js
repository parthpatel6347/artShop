import React from "react";
import { connect } from "react-redux";
import { toggleVisibility } from "../redux/cart/cartActions";
import { selectCartItems } from "../redux/cart/cartSelectors";

const CartIcon = ({ toggleCartVisibility, cartItems }) => {
  return (
    <div onClick={toggleCartVisibility}>
      <p>
        Cart <span>{cartItems.length}</span>
      </p>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartVisibility: () => dispatch(toggleVisibility()),
});

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
