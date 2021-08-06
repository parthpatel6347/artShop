import React, { useState } from "react";
import { signInWithGoogle, auth, getUserOrders } from "../firebase/utils";
import { Link } from "react-router-dom";
import { syncCartWithUser } from "../firebase/utils";
import { selectCartItems } from "../redux/cart/cartSelectors";
import { connect } from "react-redux";
import { getUserCart } from "../firebase/utils";
import { cloneCart } from "../redux/cart/cartActions";
import { syncOrders } from "../redux/orders/ordersActions";

const SignIn = ({ cartItems, cloneCart, syncOrders }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth
        .signInWithEmailAndPassword(email, password)
        .then((userCred) => {
          if (cartItems.length) {
            syncCartWithUser(userCred.user.uid, cartItems);
          } else {
            getUserCart(userCred.user.uid).then((cart) => cloneCart(cart));
          }
          getUserOrders(userCred.user.uid).then((orders) => syncOrders(orders));
        });
      setFormData({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleSignin = async (e) => {
    e.preventDefault();
    signInWithGoogle().then((userCred) => {
      if (cartItems.length) {
        syncCartWithUser(userCred.user.uid, cartItems);
      } else {
        getUserCart(userCred.user.uid).then((cart) => cloneCart(cart));
      }
      getUserOrders(userCred.user.uid).then((orders) => syncOrders(orders));
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <button type="submit">Sign in</button>
        <button onClick={handleGoogleSignin}>Sign in with Google</button>
      </form>

      <Link to="/signup">Sign up using email</Link>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

const mapDispatchToProps = (dispatch) => ({
  cloneCart: (cart) => dispatch(cloneCart(cart)),
  syncOrders: (orders) => dispatch(syncOrders(orders)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
