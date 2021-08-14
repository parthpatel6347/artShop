import React from "react";
import { connect } from "react-redux";
import { toggleVisibility } from "../redux/cart/cartActions";
import { selectCartItems } from "../redux/cart/cartSelectors";
import { CartIconMain, CartImg, CartNum } from "../styles/NavbarStyles";

import { ReactComponent as IconCart } from "../svg/cart.svg";

const CartIcon = ({ toggleCartVisibility, cartItems }) => {
  return (
    <CartIconMain onClick={toggleCartVisibility}>
      <CartImg>
        <IconCart />
      </CartImg>
      <CartNum>{cartItems.length}</CartNum>
    </CartIconMain>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartVisibility: () => dispatch(toggleVisibility()),
});

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
