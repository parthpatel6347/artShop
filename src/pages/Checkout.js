import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { selectCartItems, selectCartTotal } from "../redux/cart/cartSelectors";
import { removeItem } from "../redux/cart/cartActions";

// import StripeButton from "../components/StripeButton";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const cardElementOptions = {
  style: {
    base: {},
    invalid: {},
  },
  hidePostalCode: true,
};

const Checkout = ({ cartItems, total, removeItem, history }) => {
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
      console.log("[PaymentMethod]", paymentMethod);
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      {cartItems.map((item) => (
        <div>
          <p>{item.title}</p>
          <p>{item.price}</p>
          <button onClick={() => removeItem(item)}>X</button>
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
});

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Checkout)
);
