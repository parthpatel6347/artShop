import React from "react";
import { connect } from "react-redux";

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
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps)(Cart);
