import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import App from "./App";
import Nav from "./components/Navigation";
import About from "./components/About";
class routing extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <switch>
            <Route path="/" component={App} exact />
            <Route path="/about" component={About} />
          </switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default routing;
