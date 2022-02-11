import React from "react";

// import styled components
import {
  InfoContainer,
  InfoTop,
  OrderInfo,
  OrderInfoRow,
  OrderItemContainer,
  StatusContainer,
  StatusText,
  ItemImage
} from "../styles/OrdersStyles";


const OrderItem = ({ date, items, orderNo, total }) => {

  // get the image of first item to set as preview for the order 
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
