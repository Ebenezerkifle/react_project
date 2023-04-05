import React, { Component } from "react";
import { paginate } from "../utiles/paginate";
import TableHeader from "./comman/table_header";
import TableBody from "./comman/table_body";
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
      { path: "title", label: "Title" },
      { path: "genre.name", label: "Genre" },
      { path: "numberInStock", label: "Stock" },
      { path: "dailyRentalRate", label: "Rate" },
      { key: "like" },
      { key: "delete" },
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
