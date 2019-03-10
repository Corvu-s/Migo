import React, { Component } from "react";
import Forms from "./components/Form";
import Title from "./components/title";
import Test from "./components/test";

class App extends Component {
  state = {
    button: " ",
    indicator1: false,
    indicator2: false
  };

  getData = event => {
    event.preventDefault();
    const top = event.target.elements.top.value;

    if (top === "website") {
      this.setState({
        button: event.target.elements.first.value,
        indicator1: true,
        inducator2: false
      });
    } else if (top === "app") {
      this.setState({
        button: event.target.elements.second.value,
        inducator1: false,
        indicator2: true
      });
    }
  };
  render() {
    return (
      <div>
        <Title />
        <Forms getData={this.getData} />
        <Test
          tag={this.state.button}
          indicator1={this.state.indicator}
          inducator2={this.state.inducator2}
        />
      </div>
    );
  }
}

export default App;
