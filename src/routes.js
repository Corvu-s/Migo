import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import App from "./App";
import About from "./components/About";
import Navigate from "./components/Navigation";
class Routing extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigate />
          <Switch>
            <Route path="/" component={App} exact />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Routing;
