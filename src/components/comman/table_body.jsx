import React, { Component } from "react";
import _ from "lodash";
import Like from "./like";
import { Link } from "react-router-dom";

// movie: array
// onlike: function
// ondelete: function

class TableBody extends Component {
  renderCall = (column, movie) => {
    if (column.content) return column.content(movie);
    return _.get(movie, column.path);
  };

  render() {
    const { movies, columns } = this.props;
    return (
      <tbody>
        {movies.map((movie) => (
          <tr key={movie._id}>
            {columns.map((column) => (
              <td key={movie._id + (column.path || column.key)}>
                {this.renderCall(column, movie)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
