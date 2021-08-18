import React, { useState } from "react";
import { signInWithGoogle, auth, getUserOrders } from "../firebase/utils";
import { Link } from "react-router-dom";
import { syncCartWithUser } from "../firebase/utils";
import { selectCartItems } from "../redux/cart/cartSelectors";
import { connect } from "react-redux";
import { getUserCart } from "../firebase/utils";
import { cloneCart } from "../redux/cart/cartActions";
import { syncOrders } from "../redux/orders/ordersActions";
import {
  ButtonGoogle,
  ButtonStyled,
  ContainerMain,
  CustomInput,
  Divider,
  DividerLine,
  FormContainer,
  Header,
} from "../styles/SigninStyles";

import { ReactComponent as GoogleLogo } from "../svg/googleIcon.svg";

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
    <ContainerMain>
      <FormContainer>
        <Header>Sign In</Header>
        <CustomInput
          placeholder="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <CustomInput
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <ButtonStyled onClick={handleSubmit}>Sign in</ButtonStyled>
        <Divider>
          <DividerLine />
          <span style={{ margin: "0 10px" }}>OR</span>
          <DividerLine />
        </Divider>
        <ButtonGoogle onClick={handleGoogleSignin}>
          Sign in with Google
        </ButtonGoogle>
      </FormContainer>
      <FormContainer>
        Don't have an account?<Link to="/signup">Sign up</Link>
      </FormContainer>
    </ContainerMain>
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
