import React from "react";
import { connect } from "react-redux";
import { selectUserOrders } from "../redux/orders/ordersSelectors";

import OrderItem from "../components/OrderItem";

const Orders = ({ userOrders }) => {
  let orders = userOrders.map((order) => ({
    date: order.date,
    items: order.items,
  }));

  //   let orders = userOrders.map(order=>)
  return (
    <div>
      {orders.map((order) => (
        <OrderItem date={order.date} items={order.items} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  userOrders: selectUserOrders(state),
});

export default connect(mapStateToProps)(Orders);
