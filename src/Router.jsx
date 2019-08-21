import React from "react"
import { HashRouter, Route } from "react-router-dom"
import App from "./App";
import StikersContainer from "./Components/InterfaceWindow/StikersContainer";
import ConsumerC from "./Components/ConsumerWindow/Consumer.jsx"


const Router = () => (
  <HashRouter>
      <Route  path="/" exact component={App} />
      <Route  path="/Stikers" component={StikersContainer} />
      <Route  path="/Consumer" component={ConsumerC} />
  </HashRouter>
);
export default Router;
