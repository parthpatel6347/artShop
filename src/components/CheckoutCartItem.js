import React from "react";
import {
  CheckoutItem,
  ItemImage,
  ItemInfo,
  ItemInfoLeft,
  ItemText,
  ItemTitle,
  ItemSubTitle,
  IconContainer,
} from "../styles/CheckoutStyles";

import { ReactComponent as TrashIcon } from "../svg/trash.svg";

const CheckoutCartItem = ({ item, remove }) => {
  const { title, image, price, artist } = item;
  return (
    <CheckoutItem>
      <ItemImage
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></ItemImage>
      <ItemInfo>
        <ItemInfoLeft>
          <ItemText>
            <ItemTitle>{title}</ItemTitle>
            <ItemSubTitle>{artist}</ItemSubTitle>
          </ItemText>
          <IconContainer onClick={remove}>
            <TrashIcon />
          </IconContainer>
        </ItemInfoLeft>
        <ItemTitle>${price}.00</ItemTitle>
      </ItemInfo>
    </CheckoutItem>
  );
};

export default CheckoutCartItem;
