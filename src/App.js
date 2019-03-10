import React, { Component } from "react";
import Forms from "./components/Form";
import Title from "./components/title";
import Display from "./components/Display";
import Data from "./components/data.json";
class App extends Component {
  state = {
    temp3: undefined,
    temp1: undefined,
    temp2: undefined,
    website: false
  };
  getData = event => {
    event.preventDefault();
    const top = event.target.elements.top.value;
    if (top === "website") {
      const bottom = event.target.elements.first.value;
      this.setState({
        website: true,
        temp1: bottom,
        temp2: "website",
        temp3: Data.bottom
      });
      console.log(Data);
    }
  };
  render() {
    return (
      <div>
        <Title />
        <Forms getData={this.getData} />
        <Display
          website={this.state.website}
          temp1={this.state.temp1}
          temp2={this.state.temp2}
          temp3={this.state.temp3}
        />
      </div>
    );
  }
}

export default App;
