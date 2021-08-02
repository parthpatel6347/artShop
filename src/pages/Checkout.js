import React from "react";
import { connect } from "react-redux";

import { selectCartItems, selectCartTotal } from "../redux/cart/cartSelectors";
import { removeItem } from "../redux/cart/cartActions";

const Checkout = ({ cartItems, total, removeItem }) => {
  return (
    <div>
      <h2>Checkout</h2>
      {cartItems.map((item) => (
        <div>
          <p>{item.title}</p>
          <p>{item.price}</p>
          <button onClick={() => removeItem(item)}>X</button>
        </div>
      ))}
      <h3>Total : {total}</h3>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
  total: selectCartTotal(state),
});

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
