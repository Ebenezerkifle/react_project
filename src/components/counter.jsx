import React, { Component } from "react";
import "../bootstrap.css";

class Counter extends Component {
  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const count = this.props.counter.value;
    return count === 0 ? "Zero" : count;
  }
  disableButton() {
    let disable = "btn btn-secondary btn-sm ";
    disable += this.props.counter.value === 0 ? "disabled" : "";
    return disable;
  }

  render() {
    let classes = this.getBadgeClass();
    return (
      <div className="container text-left">
        <div className="row">
          <div className="col-1">
            <span className={classes}>{this.formatCount()}</span>
          </div>

          <div className="col">
            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              className="btn btn-secondary btn-sm m-2"
            >
              +
            </button>
            <button
              onClick={() => this.props.onDecrement(this.props.counter)}
              // className={this.disableButton()}
              className="btn btn-secondary btn-sm m-2"
              disabled={this.props.counter.value == 0}
            >
              -
            </button>
            <button
              onClick={() => this.props.onDelete(this.props.counter)}
              className="btn btn-danger btn-sm m-2"
            >
              x
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Counter;
