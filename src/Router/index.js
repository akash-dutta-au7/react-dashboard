import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Home from "../Pages/Home";
import CoinDetails from "../Pages/CoinDetails";

const Routes = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/coin-details" component={CoinDetails} />
      </Switch>
    </div>
  );
};

export default Routes;
