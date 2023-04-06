import React, { Component } from "react";
import { paginate } from "../utiles/paginate";
import TableHeader from "./comman/table_header";
import TableBody from "./comman/table_body";
import { Link } from "react-router-dom";
import Like from "./comman/like";

class MovieTable extends Component {
  raiseSort = (path) => {
    let sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn = { path, order: "asc" };
    }

    this.props.onSort(sortColumn);
  };
  render() {
    const {
      movies,
      selectedPage,
      pageSize,
      sortColumn,
      onLike,
      onDelete,
      onSort,
    } = this.props;
    const columns = [
      {
        path: "title",
        label: "Title",
        content: (movie) => (
          <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
        ),
      },
      { path: "genre.name", label: "Genre" },
      { path: "numberInStock", label: "Stock" },
      { path: "dailyRentalRate", label: "Rate" },
      {
        key: "like",
        content: (movie) => (
          <Like liked={movie.liked} onClick={() => onLike(movie)} />
        ),
      },
      {
        key: "delete",
        content: (movie) => (
          <button
            onClick={() => onDelete(movie._id)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        ),
      },
    ];
    return (
      <table className="table">
        <TableHeader
          columns={columns}
          onSort={onSort}
          sortColumn={sortColumn}
        />
        <TableBody
          movies={paginate(pageSize, selectedPage, movies)}
          onDelete={onDelete}
          onLike={onLike}
          columns={columns}
        />
      </table>
    );
  }
}
export default MovieTable;
