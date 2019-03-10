import React, { Component } from "react";
import Forms from "./components/Form";
import Title from "./components/title";
import Test from "./components/test";

class App extends Component {
  state = {
    button: " ",
    section: " "
  };

  getData = event => {
    event.preventDefault();
    const top = event.target.elements.top.value;

    if (top === "website") {
      this.setState({
        button: event.target.elements.first.value,
        section: top
      });
    } else if (top === "app") {
      this.setState({
        button: event.target.elements.second.value,
        section: top
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
          pass={this.state.section}
          indicator1={this.state.indicator1}
          indicator2={this.state.inducator2}
        />
      </div>
    );
  }
}

export default App;
