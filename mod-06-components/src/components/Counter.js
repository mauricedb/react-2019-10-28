import React, { Component } from "react";

class Counter extends Component {
  state = { count: 0 };

  increment = () => {
    // this.setState({ count: this.state.count + 1 });
    // this.setState({ count: this.state.count + 1 });

    this.setState(state => ({ count: state.count + 1 }));
    this.setState(state => ({ count: state.count + 1 }));
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <hr />
        <button onClick={this.increment}>Increment {count}</button>
        <hr />
      </div>
    );
  }
}

export default Counter;
