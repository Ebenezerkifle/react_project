import React, { Component } from "react";
import Input from "./comman/input";

class LoginForm extends Component {
  //   username = React.createRef();
  //   password = React.createRef();
  //   componentDidMount() {
  //     //this.username.current.focus();
  //   }
  state = {
    account: {
      username: "",
      password: "",
    },
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // const uname = this.username.current.value;
    // const passcode = this.password.current.value;
    console.log(this.state.account.username, this.state.account.password);
  };
  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };
  render() {
    return (
      <div className="container">
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          {/* <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              autoFocus
              value={this.state.account.username}
              onChange={this.handleChange}
              name="username"
              //ref={this.username}
              id="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              //ref={this.password}
              value={this.state.account.password}
              onChange={this.handleChange}
              name="password"
              id="password"
              type="text"
              className="form-control"
            />
          </div> */}
          <Input
            value={this.state.account.username}
            onchange={this.handleChange}
            name="username"
            label="Username"
          />
          <Input
            value={this.state.account.password}
            onchange={this.handleChange}
            name="password"
            label="Password"
          />
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
