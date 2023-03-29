import "./App.css";
import Counters from "./components/counters";
import React, { Component } from "react";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
    count: 0,
  };
  handleDelete = (counter) => {
    const counters = this.state.counters.filter((c) => c.id !== counter.id);
    let count = this.state.count - counter.value;
    this.setState({ counters, count });
  };
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    let count = this.state.count;
    count++;
    this.setState({ counters, count });
  };
  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value--;
    let count = this.state.count;
    count--;
    this.setState({ counters, count });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar count={this.state.count} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
