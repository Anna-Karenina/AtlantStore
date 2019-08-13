import React from "react"
import { HashRouter, Route } from "react-router-dom"
import App from "./App";
import StikersContainer from "./Components/InterfaceWindow/StikersContainer";


const Router = () => (
  <HashRouter>

      <Route  path="/" exact component={App} />
      <Route  path="/Stikers" component={StikersContainer} />

  </HashRouter>
);
export default Router;
