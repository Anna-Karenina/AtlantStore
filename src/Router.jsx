import React from "react"
import { HashRouter, Route, Switch } from "react-router-dom"
import AppC from "./App";
import StikersContainer from "./Components/StikerWindow/StikersContainer";
import ConsumerC from "./Components/ConsumerWindow/Consumer.jsx"


const Router = () => (
  <HashRouter>
    <Switch>
      <Route  path="/" exact component={AppC} />
      <Route  path="/Stikers" component={StikersContainer} />
      <Route  path="/Consumer" component={ConsumerC} />
    </Switch>
  </HashRouter>
);
export default Router;
