import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./comman/input";
import Form from "./comman/form";

class LoginForm extends Form {
  //   username = React.createRef();
  //   password = React.createRef();
  //   componentDidMount() {
  //     //this.username.current.focus();
  //   }
  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    //call the server
    console.log("submitted");
  };

  render() {
    const { errors, data } = this.state;
    return (
      <div className="container">
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            value={data.username}
            onchange={this.handleChange}
            name="username"
            label="Username"
            error={errors.username}
          />
          <Input
            value={data.password}
            onchange={this.handleChange}
            name="password"
            label="Password"
            error={errors.password}
          />
          <button disabled={this.validate()} className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
