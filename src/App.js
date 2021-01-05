import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 0,
    };
  }

  handleIncrease = () => {
    this.setState({ number: this.state.number + 1 });
  };

  handleDecrease = () => {
    this.setState({ number: this.state.number - 1 });
  };

  handleReset = () => {
    this.setState({ number: 0 });
  };

  render() {
    return (
      <div className="app">
        <h1>{this.state.number}</h1>
        <div>
          <button onClick={this.handleIncrease}>Increase</button>
          <button onClick={this.handleDecrease}>Decrease</button>
          <button onClick={this.handleReset}>Reset</button>
        </div>
      </div>
    );
  }
}
export default App;
