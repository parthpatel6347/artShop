import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { auth } from "./firebase/utils";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import ProductView from "./pages/ProductView";
import Categories from "./pages/Categories";
import SignIn from "./pages/SignIn";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      console.log(user);
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div>
      <Navbar currentUser={currentUser} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/explore" exact component={Categories} />
        <Route path="/explore/:id" exact component={Explore} />
        <Route path="/product/:id" exact component={ProductView} />
        <Route path="/signin" exact component={SignIn} />
      </Switch>
    </div>
  );
};

export default App;
