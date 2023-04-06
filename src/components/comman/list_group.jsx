import React from "react";

const ListGroup = ({
  genres,
  selectedGenreId,
  onGenraChanged,
  valueProperty,
  textProperty,
}) => {
  return (
    <ul className="list-group">
      {genres.map((genre) => (
        <li
          key={genre[valueProperty]}
          onClick={() => onGenraChanged(genre._id)}
          className={
            selectedGenreId === genre._id
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          {genre[textProperty]}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
