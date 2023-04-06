import React, { Component } from "react";

class Customers extends Component {
  render() {
    return (
      <main className="container">
        <h2>{this.props.title}</h2>
      </main>
    );
  }
}

export default Customers;
