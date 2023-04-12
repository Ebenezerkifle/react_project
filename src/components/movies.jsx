import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./comman/pagination";
import ListGroup from "./comman/list_group";
import { getGenres } from "../services/fakeGenreService";
import MovieTable from "./movieTable";
import { Link } from "react-router-dom";
import _ from "lodash";
import "../bootstrap.css";
import SearchBox from "./searchBox";

class Movies extends Component {
  state = {
    movieList: [],
    genres: [],
    pageSize: 4,
    selectedPage: 1,
    selectedGenreId: null,
    sortColumn: { path: "title", order: "asce" },
    searchQuery: "",
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
      searchQuery: "",
    });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  handleSearch = (searchQuery) => {
    this.setState({
      selectedGenreId: null,
      searchQuery: searchQuery,
      selectedPage: 1,
    });
  };

  getPageData = () => {
    const { movieList: allMovie, selectedGenreId, searchQuery } = this.state;
    let movies = allMovie;
    if (searchQuery) {
      movies = allMovie.filter((m) =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
      // console.log(searchQuery);
    } else if (selectedGenreId !== 0 && selectedGenreId !== null) {
      movies = allMovie.filter((m) => m.genre._id === selectedGenreId);
    }

    console.log(movies.length);
    movies = _.orderBy(
      movies,
      [this.state.sortColumn.path],
      [this.state.sortColumn.order]
    );

    return movies;
  };

  render() {
    const { length: count } = this.state.movieList;
    if (count === 0)
      return (
        <main className="container">
          <h5>There are no movies in the database!</h5>
        </main>
      );

    const movies = this.getPageData();
    return (
      <main className="container">
        <div className="row">
          <div className="col-3" style={{ marginTop: 20 }}>
            <ListGroup
              genres={this.state.genres}
              textProperty="name"
              valueProperty="_id"
              selectedGenreId={this.state.selectedGenreId}
              onGenraChanged={this.handleGenraChange}
            />
          </div>
          <div className="col">
            <Link
              to="/movies/new"
              className={"btn btn-primary"}
              style={{ marginBottom: 10, marginTop: 20 }}
            >
              New Movie
            </Link>
            <h5 style={{ marginTop: 5 }}>
              Showing {movies.length} movies in the database.
            </h5>
            <SearchBox
              onSearch={this.handleSearch}
              value={this.state.searchQuery}
            />
            <MovieTable
              movies={movies}
              pageSize={this.state.pageSize}
              selectedPage={this.state.selectedPage}
              onLike={this.handleLike}
              onDelete={this.handleDelet}
              onSort={this.handleSort}
              sortColumn={this.state.sortColumn}
            />
            <Pagination
              itemCount={movies.length}
              pageSize={this.state.pageSize}
              onSelected={this.handleSelect}
              selected={this.state.selectedPage}
            />
          </div>
        </div>
      </main>
    );
  }
}
export default Movies;
