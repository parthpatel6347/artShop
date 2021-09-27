import React from "react";
import {
  InfoContainer,
  OrderInfo,
  OrderInfoRow,
  OrderItemContainer,
} from "../styles/OrdersStyles";
import { ItemImage } from "../styles/OrdersStyles";

const OrderItem = ({ date, items, orderNo, total }) => {
  let image = items[0].image;

  return (
    <OrderItemContainer>
      <ItemImage
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      <InfoContainer>
        <OrderInfoRow>
          <OrderInfo>Order No: {orderNo}</OrderInfo>
          <OrderInfo>{items.length} Items</OrderInfo>
        </OrderInfoRow>
        <OrderInfoRow>
          <OrderInfo>{date.slice(4)}</OrderInfo>
          <OrderInfo>${total}.00</OrderInfo>
        </OrderInfoRow>
      </InfoContainer>
    </OrderItemContainer>
  );
};

export default OrderItem;
