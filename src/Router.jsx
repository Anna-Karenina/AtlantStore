import React from "react"
import { HashRouter, Route } from "react-router-dom"
import App from "./App";
import StikersContainer from "./Components/InterfaceWindow/StikersContainer";
import Consumer from "./Components/ConsumerWindow/Consumer";


const Router = () => (
  <HashRouter>
      <Route  path="/" exact component={App} />
      <Route  path="/Stikers" component={StikersContainer} />
      <Route  path="/Consumer" exact component={Consumer} />
  </HashRouter>
);
export default Router;
