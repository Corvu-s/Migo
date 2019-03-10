import React, { Component } from "react";
import Forms from "./components/Form";
import Title from "./components/title";
import Display from "./components/Display";
class App extends Component {
  state = {
    temp3: undefined,
    temp4: undefined,
    temp1: undefined,
    temp2: undefined,
    website: false,
    app: false
  };
  getData = async event => {
    event.preventDefault();
    const top = event.target.elements.top.value;
    if (top === "website") {
      const Webbottom = event.target.elements.first.value;
      this.setState({
        temp3: "website",
        website: true,
        app: false,
        temp1: Webbottom
      });
    } else if (top === "mobile") {
      const Appbottom = event.target.elements.second.value;

      this.setState({
        temp4: "app",
        app: true,
        website: false,
        temp2: Appbottom
      });
    }
  };
  render() {
    return (
      <div>
        <Title />
        <Forms getData={this.getData} />
        <Display
          app={this.state.app}
          website={this.state.website}
          temp1={this.state.temp1}
          temp2={this.setState.temp2}
          temp3={this.state.temp3}
          temp4={this.state.temp4}
        />
      </div>
    );
  }
}

export default App;
