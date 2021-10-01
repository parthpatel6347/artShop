import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { selectCartItems, selectCartTotal } from "../redux/cart/cartSelectors";
import { selectCurrentUser } from "../redux/user/userSelectors";

import { removeItem } from "../redux/cart/cartActions";
import { emptyCart } from "../redux/cart/cartActions";
import { syncOrders } from "../redux/orders/ordersActions";

import { getUserOrders } from "../firebase/utils";

// import StripeButton from "../components/StripeButton";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import {
  addItemToUserCart,
  addOrdertoUser,
  syncCartWithUser,
} from "../firebase/utils";
import {
  CheckoutMain,
  CheckoutCartContainer,
  TotalText,
  TitleContainer,
  Title,
  ItemCount,
  PaymentContainer,
  CardDetailsContainer,
} from "../styles/CheckoutStyles";
import CheckoutCartItem from "../components/CheckoutCartItem";
import { ButtonStyled } from "../styles/SigninStyles";

const cardElementOptions = {
  style: {
    base: {
      backgroundColor: "#FFFDF8",
      color: "#716862",
      fontFamily: "Nunito Sans, sans-serif",
      fontSize: "18px",
      fontSmoothing: "antialiased",
      lineHeight: "36px",
      "::placeholder": {
        color: "#B7A79C",
      },
    },
    invalid: {},
  },
  hidePostalCode: true,
};

const Checkout = ({
  cartItems,
  total,
  removeItem,
  history,
  currentUser,
  emptyLocalCart,
  syncOrders,
}) => {
  useEffect(() => {
    if (!currentUser) history.push("/signin");
  });

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      history.push("/success");

      //update user orders on firebase Database
      await addOrdertoUser(currentUser.id, cartItems, total);

      //empty cart in redux state
      emptyLocalCart();

      //empty cart on user firebase database
      await addItemToUserCart(currentUser, []);

      //get orders from user firebase database and update orders in redux state
      await getUserOrders(currentUser.id).then((orders) => syncOrders(orders));

      console.log("[PaymentMethod]", paymentMethod);
    }
  };

  const handleRemoveItem = async (item) => {
    removeItem(item);
    await addItemToUserCart(
      currentUser,
      cartItems.filter((cartItem) => cartItem.id !== item.id)
    );
  };

  return (
    <CheckoutMain>
      <CheckoutCartContainer>
        <TitleContainer>
          <Title>Cart</Title>
          <ItemCount>
            {cartItems.length > 1
              ? `${cartItems.length} Items`
              : `${cartItems.length} Item`}
          </ItemCount>
        </TitleContainer>
        {cartItems.map((item) => (
          <CheckoutCartItem
            item={item}
            remove={() => {
              handleRemoveItem(item);
            }}
          />
        ))}
        <TotalText>Total : ${total}.00</TotalText>
      </CheckoutCartContainer>
      <PaymentContainer>
        <TitleContainer>
          <Title>Payment</Title>
        </TitleContainer>
        <CardDetailsContainer>
          <CardElement options={cardElementOptions} />
        </CardDetailsContainer>
        <ButtonStyled style={{ width: "500px" }} onClick={handleSubmit}>
          Pay ${total}.00
        </ButtonStyled>
      </PaymentContainer>
    </CheckoutMain>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
  total: selectCartTotal(state),
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
  emptyLocalCart: () => dispatch(emptyCart()),
  syncOrders: (orders) => dispatch(syncOrders(orders)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Checkout)
);
