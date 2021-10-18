import React from "react";
import {
  InfoContainer,
  InfoTop,
  OrderInfo,
  OrderInfoRow,
  OrderItemContainer,
  StatusContainer,
  StatusText,
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
        <InfoTop>
          <OrderInfoRow>
            <OrderInfo>Order No: {orderNo}</OrderInfo>
            <OrderInfo>
              {items.length} {items.length > 1 ? "Items" : "Item"}
            </OrderInfo>
          </OrderInfoRow>
          <OrderInfoRow>
            <OrderInfo>{date.slice(4)}</OrderInfo>
            <OrderInfo>${total}.00</OrderInfo>
          </OrderInfoRow>
        </InfoTop>

        <StatusContainer>
          <StatusText>Processing</StatusText>
        </StatusContainer>
      </InfoContainer>
    </OrderItemContainer>
  );
};

export default OrderItem;
