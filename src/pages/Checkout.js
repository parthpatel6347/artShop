import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { selectCartItems, selectCartTotal } from "../redux/cart/cartSelectors";
import { selectCurrentUser } from "../redux/user/userSelectors";

import { removeItem } from "../redux/cart/cartActions";
import { emptyCart } from "../redux/cart/cartActions";

// import StripeButton from "../components/StripeButton";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { addItemToUserCart, syncCartWithUser } from "../firebase/utils";

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
      emptyLocalCart();
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
    <div>
      <h2>Checkout</h2>
      {cartItems.map((item) => (
        <div>
          <p>{item.title}</p>
          <p>{item.price}</p>
          <button
            onClick={() => {
              handleRemoveItem(item);
            }}
          >
            X
          </button>
        </div>
      ))}
      <h3>Total : {total}</h3>
      {/* <StripeButton price={total} /> */}
      <CardElement options={cardElementOptions} />
      <button onClick={handleSubmit}>pay</button>
    </div>
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
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Checkout)
);
