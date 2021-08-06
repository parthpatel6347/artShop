import React from "react";

const OrderItem = ({ date, items }) => {
  return (
    <div style={{ border: "1px solid black" }}>
      <p>Order Date: {date}</p>
      <p>Total Items:{items.length}</p>
    </div>
  );
};

export default OrderItem;
