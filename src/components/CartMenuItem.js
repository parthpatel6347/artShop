import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { hideCart } from "../redux/cart/cartActions";
import { selectCartItems } from "../redux/cart/cartSelectors";
import { removeItem } from "../redux/cart/cartActions";
import { selectCurrentUser } from "../redux/user/userSelectors";
import { addItemToUserCart } from "../firebase/utils";

import { ReactComponent as CrossIcon } from "../svg/cross.svg";

import {
  CartMenuItemImage,
  CartMenuItemInfo,
  CartMenuItemMain,
  CartMenuName,
  CloseIconContainer,
} from "../styles/NavbarStyles";

const CartMenuItem = ({
  item,
  history,
  hideCart,
  removeItem,
  currentUser,
  cartItems,
}) => {
  const { category, id, image, price, title } = item;

  const handleRemoveItem = async (data) => {
    removeItem(data);
    await addItemToUserCart(
      currentUser,
      cartItems.filter((cartItem) => cartItem.id !== item.id)
    );
  };

  const handleRoute = () => {
    hideCart();
    history.push(`/explore/${category}/${id}`);
  };
  return (
    <CartMenuItemMain>
      <CartMenuItemImage
        onClick={handleRoute}
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></CartMenuItemImage>
      <CartMenuItemInfo onClick={handleRoute}>
        <CartMenuName>{title}</CartMenuName>
        <span style={{ fontWeight: 600, fontSize: "13px", opacity: "0.6" }}>${price}</span>
      </CartMenuItemInfo>
      <CloseIconContainer>
        <CrossIcon onClick={() => handleRemoveItem(item)} />
      </CloseIconContainer>
    </CartMenuItemMain>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  hideCart: () => dispatch(hideCart()),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartMenuItem)
);
