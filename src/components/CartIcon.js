import React from "react";
import { connect } from "react-redux";
import { selectCartItems } from "../redux/cart/cartSelectors";
import { CartIconMain, CartImg, CartNum } from "../styles/NavbarStyles";

import iconCart from "../svg/cart.svg";

const CartIcon = ({ cartItems }) => {
  return (
    <CartIconMain>
      <CartImg>
        <img src={iconCart} alt="cart" />
      </CartImg>
      <CartNum>{cartItems.length}</CartNum>
    </CartIconMain>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartIcon);
