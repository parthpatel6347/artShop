import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { auth, createUserProfileDocument } from "./firebase/utils";
import { setCurrentUser } from "./redux/user/userActions";
import { selectCurrentUser } from "./redux/user/userSelectors";

import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import ProductView from "./pages/ProductView";
import Categories from "./pages/Categories";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Checkout from "./pages/Checkout";
import PaymentSuccess from "./pages/PaymentSuccess";
import Orders from "./pages/Orders";

import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import Loader from "./pages/Loader";

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

      dispatchCurrentUser(userAuth);
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/explore" exact component={Categories} />
          <Route path="/explore/:page" exact component={Explore} />
          <Route path="/explore/:page/:id" exact component={ProductView} />
          <Route path="/checkout" exact component={Checkout} />
          <Route path="/success" exact component={PaymentSuccess} />
          <Route path="/orders" exact component={Orders} />
          <Route path="/loading" exact component={Loader} />
          <Route
            path="/signin"
            exact
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignIn />
            }
          />
          <Route
            path="/signup"
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignUp />
            }
          />
        </Switch>
      </ThemeProvider>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  dispatchCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
