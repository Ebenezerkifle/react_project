import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import "../bootstrap.css";
import Like from "./comman/like";
import Pagination from "./comman/pagination";

class Movies extends Component {
  state = {
    movieList: getMovies(),
    pageSize: 4,
  };

  arrayRemove(list, item) {
    return list.filter((newList) => newList !== item);
  }

  handleLike = (movie) => {
    const movieList = [...this.state.movieList];
    const index = movieList.indexOf(movie);
    movieList[index] = { ...movieList[index] };
    movieList[index].liked = !movieList[index].liked;
    this.setState({ movieList });
  };

  handleDelet = (id) => {
    const movies = this.state.movieList.filter((m) => m._id !== id);
    this.setState({
      movieList: movies,
    });
  };

  handleSelect = () => {};

  generateMovieList() {
    return this.state.movieList.map((movie) => (
      <tr key={movie._id}>
        <td>{movie["title"]}</td>
        <td>{movie.genre.name}</td>
        <td>{movie["numberInStock"]}</td>
        <td>{movie["dailyRentalRate"]}</td>
        <td>
          <Like liked={movie.liked} onClick={() => this.handleLike(movie)} />
        </td>
        <td>
          <button
            onClick={() => this.handleDelet(movie["_id"])}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  }

  render() {
    const { length: count } = this.state.movieList;
    if (count === 0) return <p>There are no movies in the database!</p>;

    return (
      <React.Fragment>
        <p>Showing {count} movies in the database.</p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col" />
              <th scop="col" />
            </tr>
          </thead>
          <tbody>{this.generateMovieList()}</tbody>
        </table>
        <Pagination
          itemCount={this.state.movieList.length}
          pageSize={this.state.pageSize}
          onSelected={() => this.handleSelect()}
        />
      </React.Fragment>
    );
  }
}
export default Movies;
