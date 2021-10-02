import React from "react";
import { connect } from "react-redux";
import { selectUserOrders } from "../redux/orders/ordersSelectors";

import OrderItem from "../components/OrderItem";
import { OrdersMain } from "../styles/OrdersStyles";
import { Title, TitleContainer } from "../styles/CheckoutStyles";

const Orders = ({ userOrders }) => {
  let orders = userOrders.map((order) => ({
    date: order.date,
    items: order.items,
    orderNo: order.orderNo,
    total: order.total,
  }));
  return (
    <OrdersMain>
      <TitleContainer>
        <Title>Orders</Title>
      </TitleContainer>
      {orders.map((order) => (
        <OrderItem
          date={order.date}
          items={order.items}
          orderNo={order.orderNo}
          total={order.total}
        />
      ))}
    </OrdersMain>
  );
};

const mapStateToProps = (state) => ({
  userOrders: selectUserOrders(state),
});

export default connect(mapStateToProps)(Orders);
