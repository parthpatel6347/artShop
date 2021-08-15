import React from "react";
import {
  CartMenuItemImage,
  CartMenuItemInfo,
  CartMenuItemMain,
  CartMenuName,
} from "../styles/NavbarStyles";

const CartMenuItem = ({ image, title, price }) => {
  return (
    <CartMenuItemMain>
      <CartMenuItemImage
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></CartMenuItemImage>
      <CartMenuItemInfo>
        <CartMenuName>{title}</CartMenuName>
        <span style={{ fontWeight: 400, fontSize: "13px" }}>${price}</span>
      </CartMenuItemInfo>
    </CartMenuItemMain>
  );
};

export default CartMenuItem;
