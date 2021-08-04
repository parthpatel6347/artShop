import React, { useState } from "react";
import { auth, createUserProfileDocument } from "../firebase/utils";

import { syncCartWithUser } from "../firebase/utils";
import { selectCartItems } from "../redux/cart/cartSelectors";
import { connect } from "react-redux";

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
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="name" name="name" value={name} onChange={handleChange} />
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
        <label>Confirm Password</label>
        <input
          type="password"
          name="cnfPassword"
          value={cnfPassword}
          onChange={handleChange}
        />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(SignUp);
