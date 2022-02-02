import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { selectUserOrders } from "../redux/orders/ordersSelectors";
import { selectCurrentUser } from "../redux/user/userSelectors";


import OrderItem from "../components/OrderItem";
import { OrderInfo, OrdersMain } from "../styles/OrdersStyles";
import { Title, TitleContainer } from "../styles/CheckoutStyles";

const Orders = ({ userOrders, currentUser, history }) => {

  useEffect(() => {
    if (!currentUser) history.push("/signin");
  });

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
      {orders.length ? (
        orders.map((order) => (
          <OrderItem
            date={order.date}
            items={order.items}
            orderNo={order.orderNo}
            total={order.total}
          />
        ))
      ) : (
        <OrderInfo>You have'nt placed any orders yet.</OrderInfo>
      )}

    </OrdersMain>
  );
};

const mapStateToProps = (state) => ({
  userOrders: selectUserOrders(state),
  currentUser: selectCurrentUser(state),
});

export default withRouter(connect(mapStateToProps)(Orders));
