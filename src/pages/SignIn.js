import React, { useState } from "react";
import { signInWithGoogle, auth, getUserOrders } from "../firebase/utils";
import { Link } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import { syncCartWithUser } from "../firebase/utils";
import { selectCartItems } from "../redux/cart/cartSelectors";
import { connect } from "react-redux";
import { getUserCart } from "../firebase/utils";
import { cloneCart } from "../redux/cart/cartActions";
import { syncOrders } from "../redux/orders/ordersActions";
import {
  BottomLink,
  BottomText,
  ButtonGoogle,
  ButtonStyled,
  ContainerMain,
  CustomInput,
  Divider,
  DividerLine,
  ErrorText,
  FormContainer,
  FormContainerBottom,
  Header,
  LoginFormContainer,
} from "../styles/SigninStyles";

import { ReactComponent as GoogleLogo } from "../svg/googleIcon.svg";

const SignIn = ({ cartItems, cloneCart, syncOrders }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(false)

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    setLoading(true)
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
      setErrorMessage(null)
      setLoading(false)
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false)
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
      <LoginFormContainer>
        <Header>Sign In</Header>
        <>
          <form onSubmit={handleSubmit}>
            {errorMessage && (<ErrorText>Email or Password is invalid.</ErrorText>)}
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
            <ButtonStyled type="submit">
              {loading ? (
                <div style={{ marginLeft: "5px" }}>
                  <PulseLoader loading={loading} size={6} color="white" />
                </div>
              ) : "Sign in"}
            </ButtonStyled>
          </form>
          <Divider>
            <DividerLine />
            <span style={{ margin: "0 10px" }}>OR</span>
            <DividerLine />
          </Divider>
          <ButtonGoogle onClick={handleGoogleSignin}>
            Sign in with Google
          </ButtonGoogle>
        </>
      </LoginFormContainer>
      <FormContainerBottom>
        <BottomText style={{ textAlign: "center" }}>
          Don't have an account?
          <BottomLink to="/signup" style={{ marginLeft: "6px" }}>
            Sign up
          </BottomLink>
        </BottomText>
      </FormContainerBottom>
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
