import React from "react"
import { HashRouter, Route, Switch } from "react-router-dom"
import App from "./App";
import StikersContainer from "./Components/StikerWindow/StikersContainer";
import ConsumerC from "./Components/ConsumerWindow/Consumer.jsx"


const Router = () => (
  <HashRouter>
    <Switch>
      <Route  path="/" exact component={App} />
      <Route  path="/Stikers" component={StikersContainer} />
      <Route  path="/Consumer" component={ConsumerC} />
    </Switch>
  </HashRouter>
);
export default Router;
