import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { auth, createUserProfileDocument } from "./firebase/utils";
import { setCurrentUser } from "./redux/user/userActions";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import ProductView from "./pages/ProductView";
import Categories from "./pages/Categories";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const App = ({ dispatchCurrentUser, currentUser }) => {
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          dispatchCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      console.log("useEffect triggered");

      dispatchCurrentUser(userAuth);
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/explore" exact component={Categories} />
        <Route path="/explore/:id" exact component={Explore} />
        <Route path="/product/:id" exact component={ProductView} />
        <Route
          path="/signin"
          exact
          render={() => (currentUser ? <Redirect to="/explore" /> : <SignIn />)}
        />
        <Route
          path="/signup"
          render={() => (currentUser ? <Redirect to="/explore" /> : <SignUp />)}
        />
      </Switch>
    </div>
  );
};

const mapStateToPropes = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToPropes, mapDispatchToProps)(App);
