import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import "../bootstrap.css";
import Pagination from "./comman/pagination";
import ListGroup from "./comman/list_group";
import { getGenres } from "../services/fakeGenreService";
import MovieTable from "./movieTable";
import _, { set } from "lodash";

class Movies extends Component {
  state = {
    movieList: [],
    genres: [],
    pageSize: 4,
    selectedPage: 1,
    selectedGenreId: 0,
    sortColumn: { path: "title", order: "asce" },
  };

  componentDidMount() {
    this.setState({
      movieList: getMovies(),
      genres: [{ name: "All Genres", _id: 0 }, ...getGenres()],
    });
  }

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

  handleSelect = (page) => {
    this.setState({ selectedPage: page });
  };

  handleGenraChange = (genreId) => {
    this.setState({
      selectedPage: 1,
      selectedGenreId: genreId,
    });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  render() {
    const { length: count } = this.state.movieList;
    if (count === 0) return <p>There are no movies in the database!</p>;
    let movies = [...this.state.movieList];

    if (this.state.selectedGenreId !== 0) {
      movies = this.state.movieList.filter(
        (movie) => movie.genre._id === this.state.selectedGenreId
      );
    }

    const sorted = _.orderBy(
      movies,
      [this.state.sortColumn.path],
      [this.state.sortColumn.order]
    );

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-3">
            <ListGroup
              genres={this.state.genres}
              textProperty="name"
              valueProperty="_id"
              selectedGenreId={this.state.selectedGenreId}
              onGenraChanged={this.handleGenraChange}
            />
          </div>
          <div className="col">
            <p>Showing {sorted.length} movies in the database.</p>
            <MovieTable
              movies={sorted}
              pageSize={this.state.pageSize}
              selectedPage={this.state.selectedPage}
              onLike={this.handleLike}
              onDelete={this.handleDelet}
              onSort={this.handleSort}
              sortColumn={this.state.sortColumn}
            />
            <Pagination
              itemCount={sorted.length}
              pageSize={this.state.pageSize}
              onSelected={this.handleSelect}
              selected={this.state.selectedPage}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Movies;
