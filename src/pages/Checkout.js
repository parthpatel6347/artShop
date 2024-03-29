import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { selectCartItems, selectCartTotal } from "../redux/cart/cartSelectors";
import { selectCurrentUser } from "../redux/user/userSelectors";

import { removeItem } from "../redux/cart/cartActions";
import { emptyCart } from "../redux/cart/cartActions";
import { syncOrders } from "../redux/orders/ordersActions";

import { getUserOrders } from "../firebase/utils";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import {
  addItemToUserCart,
  addOrdertoUser,
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
  PaymentButton,
  TestCardDetails,
  EmptyCartText,
} from "../styles/CheckoutStyles";
import CheckoutCartItem from "../components/CheckoutCartItem";

import PulseLoader from "react-spinners/PulseLoader";

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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!currentUser) history.push("/signin");
  });

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

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
      setLoading(false);
    } else {
      //update user orders on firebase Database
      await addOrdertoUser(currentUser.id, cartItems, total);

      //get orders from user firebase database and update orders in redux state
      await getUserOrders(currentUser.id).then((orders) => syncOrders(orders));

      history.push("/success");
      setLoading(false);

      //empty cart in redux state
      emptyLocalCart();

      //empty cart on user firebase database
      await addItemToUserCart(currentUser, []);

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
            {cartItems.length !== 1
              ? `${cartItems.length} Items`
              : `${cartItems.length} Item`}
          </ItemCount>
        </TitleContainer>
        {cartItems.length < 1 && <EmptyCartText>Your cart is empty</EmptyCartText>}
        {cartItems.map((item) => (
          <CheckoutCartItem
            item={item}
            remove={() => {
              handleRemoveItem(item);
            }}
          />
        ))}
        {cartItems.length > 0 && <TotalText>Total : ${total}.00</TotalText>}
      </CheckoutCartContainer>
      <PaymentContainer empty={cartItems.length < 1}>
        <TitleContainer>
          <Title>Payment</Title>
        </TitleContainer>
        <CardDetailsContainer>
          <CardElement options={cardElementOptions} />
        </CardDetailsContainer>
        <PaymentButton onClick={handleSubmit} disabled={cartItems.length < 1}>
          {loading ? "Processing" : `Pay $${total}.00`}
          <div style={{ marginLeft: "5px" }}>
            <PulseLoader loading={loading} size={6} color="white" />
          </div>
        </PaymentButton>
        <TestCardDetails style={{ marginTop: "25px" }}>Test Card Number: 4242 4242 4242 4242</TestCardDetails>
        <TestCardDetails>Date: Any future date</TestCardDetails>
        <TestCardDetails>CVC: Any 3 digits</TestCardDetails>
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
