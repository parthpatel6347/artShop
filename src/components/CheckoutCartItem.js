import React from "react";

// import styled components
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

// import icon
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
        <ItemTitle style={{ marginLeft: "20px" }}>${price}.00</ItemTitle>
      </ItemInfo>
    </CheckoutItem>
  );
};

export default CheckoutCartItem;
