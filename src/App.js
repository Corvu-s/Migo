import React, { Component } from "react";
import Forms from "./components/Form";
import Title from "./components/title";
import Display from "./components/Display";
class App extends Component {
  state = {
    website: false,
    app: false,
    hasSubmitted: false,
    topLevel: undefined,
    bottomLevel: undefined
  };
  getData = async event => {
    event.preventDefault();
    const top = event.target.elements.top.value;
    if (top === "website") {
      const bottom = event.target.elements.underWeb.value;
    } else {
      const bottom = event.target.elements.underApp.value;
    }
    const api_call = await fetch(`     `);
    const data = await api_call.json();
    console.log(data);
    if (top === "website") {
      this.setState({
        website: true,
        app: false,
        topLevel: data,
        bottomLevel: data
      });
    } else if (top === "mobile") {
      this.setState({
        app: true,
        website: false,
        topLevel: data,
        bottomLevel: data
      });
    }
  };
  render() {
    return (
      <div style={{ background: "#B9BDBB" }}>
        <Title />
        <Forms getData={this.getData} />
        <Display
          app={this.state.app}
          website={this.state.website}
          top={this.state.topLevel}
          bottom={this.state.bottomLevel}
        />
      </div>
    );
  }
}

export default App;
