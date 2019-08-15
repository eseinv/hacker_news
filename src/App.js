import React from "react";
import { NavBar } from "./navbar";
import { Toolbar } from "./toolbar";
import { Articles } from "./articles";
import "./App.css";

class App extends React.Component {
  state = { inputText: "" };

  handleInputChange = inputText => {
    this.setState({ inputText });
  };

  render() {
    return (
      <div className="App">
        <NavBar handleInputChange={this.handleInputChange} />
        <Toolbar />
        <Articles searchFilter={this.state.inputText} />
      </div>
    );
  }
}

export default App;
