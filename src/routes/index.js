import React from "react";
import { Switch } from "react-router-dom";
import Layout from "../Layout";
import Home from "../screens/Home";
import NotFound from "../screens/NotFound";
import RouterWrapper from "./RouterWrapper";

function Routes() {
  return (
    <Switch>
      <RouterWrapper exact path="/" layout={Layout}>
        <Home />
      </RouterWrapper>
      <RouterWrapper path="*" layout={Layout}>
        <NotFound />
      </RouterWrapper>
    </Switch>
  );
}

export default Routes;
