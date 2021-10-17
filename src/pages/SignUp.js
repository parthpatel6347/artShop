import React, { useState } from "react";
import { auth, createUserProfileDocument } from "../firebase/utils";

import { syncCartWithUser } from "../firebase/utils";
import { selectCartItems } from "../redux/cart/cartSelectors";
import { connect } from "react-redux";
import {
  ContainerMain,
  FormContainer,
  Header,
  CustomInput,
  ButtonStyled,
  BottomText,
  BottomLink,
} from "../styles/SigninStyles";
import { Link } from "react-router-dom";

const SignUp = ({ cartItems }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cnfPassword: "",
  });
  const { name, email, password, cnfPassword } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== cnfPassword) {
      alert("passwords dont match");
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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContainerMain>
      <FormContainer>
        <Header>Sign Up</Header>
        <CustomInput
          placeholder="Name"
          name="name"
          type="name"
          value={name}
          onChange={handleChange}
        />
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
        <CustomInput
          placeholder="Password"
          type="password"
          name="cnfPassword"
          value={cnfPassword}
          onChange={handleChange}
        />
        <ButtonStyled onClick={handleSubmit}>Sign up</ButtonStyled>
      </FormContainer>
      <FormContainer>
        <BottomText style={{ textAlign: "center" }}>
          Already a member?
          <BottomLink to="/signin" style={{ marginLeft: "6px" }}>
            Sign in
          </BottomLink>
        </BottomText>
      </FormContainer>
    </ContainerMain>
  );
};
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(SignUp);
