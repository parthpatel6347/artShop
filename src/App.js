import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import ProductView from "./pages/ProductView";

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/explore" exact component={Explore} />
        <Route path="/product/:id" exact component={ProductView} />
      </Switch>
    </div>
  );
};

export default App;
