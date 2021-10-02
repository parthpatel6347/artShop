import React from "react";
import { connect } from "react-redux";
import { selectUserOrders } from "../redux/orders/ordersSelectors";
import {
  CheckIconContainer,
  LinkText,
  SuccessInfo,
  SuccessMain,
  SuccessTitle,
} from "../styles/PaymentSuccessStyles";
import { ReactComponent as CheckIcon } from "../svg/checkCircle.svg";

const PaymentSuccess = ({ userOrders }) => {
  let orderNo = userOrders[userOrders.length - 1].orderNo;
  let total = userOrders[userOrders.length - 1].total;

  return (
    <SuccessMain>
      <CheckIconContainer>
        <CheckIcon />
      </CheckIconContainer>
      <SuccessTitle>Success!</SuccessTitle>
      <SuccessInfo>
        Thank you! Your Payment of ${total}.00 was processed successfully.
      </SuccessInfo>
      <SuccessInfo>Your Order ID is {orderNo}.</SuccessInfo>

      <LinkText to="/explore">Continue Shopping</LinkText>
    </SuccessMain>
  );
};

const mapStateToProps = (state) => ({
  userOrders: selectUserOrders(state),
});

export default connect(mapStateToProps)(PaymentSuccess);
