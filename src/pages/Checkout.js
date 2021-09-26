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
import { CheckoutMain, CheckoutCartContainer } from "../styles/CheckoutStyles";
import CheckoutCartItem from "../components/CheckoutCartItem";

const cardElementOptions = {
  style: {
    base: {},
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
      await addOrdertoUser(currentUser.id, cartItems);

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
      <h2>Checkout</h2>
      <CheckoutCartContainer>
        {cartItems.map((item) => (
          <CheckoutCartItem
            item={item}
            remove={() => {
              handleRemoveItem(item);
            }}
          />
        ))}
      </CheckoutCartContainer>
      <h3>Total : {total}</h3>
      {/* <StripeButton price={total} /> */}
      <CardElement options={cardElementOptions} />
      <button onClick={handleSubmit}>pay</button>
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
