import React from "react";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <div>
      <h1>Payment Success</h1>
      <Link to="/explore">Continue Shopping</Link>
    </div>
  );
};

export default PaymentSuccess;
