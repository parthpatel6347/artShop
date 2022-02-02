import React, { useState } from "react";
import { auth, createUserProfileDocument } from "../firebase/utils";

import { syncCartWithUser } from "../firebase/utils";
import { selectCartItems } from "../redux/cart/cartSelectors";
import { connect } from "react-redux";
import PulseLoader from "react-spinners/PulseLoader";

import {
  ContainerMain,
  FormContainer,
  Header,
  CustomInput,
  ButtonStyled,
  BottomText,
  BottomLink,
  ErrorText,
  FormContainerBottom,
} from "../styles/SigninStyles";


import { Link } from "react-router-dom";

const SignUp = ({ cartItems }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cnfPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(false)
  const { name, email, password, cnfPassword } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();

    if (password !== cnfPassword) {
      setErrorMessage("Passwords do not match.")
      setLoading(false)
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName: name }).then(
        (userCred) => {
          if (cartItems.length) {
            syncCartWithUser(userCred.id, cartItems);
          }
        }
      );
      setFormData({
        name: "",
        email: "",
        password: "",
        cnfPassword: "",
      });
      setErrorMessage(null)
      setLoading(false)
    } catch (error) {
      setErrorMessage(error.message)
      setLoading(false)
    }
  };

  return (
    <ContainerMain>
      <FormContainer>
        <Header>Sign Up</Header>
        <form onSubmit={handleSubmit}>
          {errorMessage && (<ErrorText>{errorMessage}</ErrorText>)}
          <CustomInput
            placeholder="Name"
            name="name"
            type="name"
            value={name}
            onChange={handleChange}
            required
          />
          <CustomInput
            placeholder="Email"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
          <CustomInput
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
          <CustomInput
            placeholder="Password"
            type="password"
            name="cnfPassword"
            value={cnfPassword}
            onChange={handleChange}
            required
          />
          <ButtonStyled type="submit">
            {loading ? (
              <div style={{ marginLeft: "5px" }}>
                <PulseLoader loading={loading} size={6} color="white" />
              </div>
            ) : "Sign up"}
          </ButtonStyled>
        </form>
      </FormContainer>
      <FormContainerBottom>
        <BottomText style={{ textAlign: "center" }}>
          Already a member?
          <BottomLink to="/signin" style={{ marginLeft: "6px" }}>
            Sign in
          </BottomLink>
        </BottomText>
      </FormContainerBottom>
    </ContainerMain>
  );
};
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(SignUp);
