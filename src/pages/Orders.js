import React from "react";
import { connect } from "react-redux";
import { selectUserOrders } from "../redux/orders/ordersSelectors";

import OrderItem from "../components/OrderItem";
import { OrdersMain } from "../styles/OrdersStyles";

const Orders = ({ userOrders }) => {
  let orders = userOrders.map((order) => ({
    date: order.date,
    items: order.items,
    orderNo: order.orderNo,
    total: order.total,
  }));
  console.log(orders);
  return (
    <OrdersMain>
      <h1>orders</h1>
      <div>
        {orders.map((order) => (
          <OrderItem
            date={order.date}
            items={order.items}
            orderNo={order.orderNo}
            total={order.total}
          />
        ))}
      </div>
    </OrdersMain>
  );
};

const mapStateToProps = (state) => ({
  userOrders: selectUserOrders(state),
});

export default connect(mapStateToProps)(Orders);
