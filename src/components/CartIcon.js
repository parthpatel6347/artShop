import React from "react";
import { connect } from "react-redux";
import { toggleVisibility } from "../redux/cart/cartActions";

const CartIcon = ({ toggleCartVisibility }) => {
  return (
    <div onClick={toggleCartVisibility}>
      <p>
        Cart <span>0</span>
      </p>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartVisibility: () => dispatch(toggleVisibility()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
