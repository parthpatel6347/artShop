import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../firebase/utils";

const Navbar = ({ currentUser }) => {
  return (
    <div>
      <Link to="/">
        <h3>artShop</h3>
      </Link>
      <div>
        <Link to="/explore">Explore</Link>
        {currentUser ? (
          <div onClick={() => auth.signOut()}>Sign Out</div>
        ) : (
          <Link to="/signin">Sign In</Link>
        )}
      </div>
    </div>
  );
};

const mapStateToPropes = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToPropes)(Navbar);
