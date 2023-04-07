import React from "react";
import Form from "./comman/form";
import Joi from "joi-browser";
import { getGenres } from "../services/fakeGenreService";
import Navigator from "./comman/navigator";

class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genre: "",
      stock: "",
      rate: "",
    },
    errors: {},
    genreList: [],
  };

  componentDidMount() {
    if (Object.keys(this.props).length > 0) {
    }
    this.setState({ genreList: [{ _id: "0", name: "" }, ...getGenres()] });
  }

  schema = {
    title: Joi.string().required().label("Title"),
    genre: Joi.string().required().label("Genre"),
    stock: Joi.number()
      .integer()
      .min(0)
      .max(100)
      .required()
      .label("Number in Stock"),
    rate: Joi.number().min(0).max(10).required().label("Daily Rental Rate"),
  };

  doSubmit = () => {
    console.log("saved");
    console.log(this.state.data);
    return <Navigator to="/" />;
  };

  render() {
    return (
      <div className="container">
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderDropdown("genre", "Genre", this.state.genreList)}
          {this.renderInput("stock", "Number in Stock")}
          {this.renderInput("rate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
