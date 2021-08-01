import React from "react";
import { connect } from "react-redux";
import { selectCartItems } from "../redux/cart/cartSelectors";

const Cart = ({ cartItems }) => {
  return (
    <div style={{ backgroundColor: "blue", height: "400px", width: "200px" }}>
      {cartItems.map((item) => (
        <h4>{item.title}</h4>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(Cart);
