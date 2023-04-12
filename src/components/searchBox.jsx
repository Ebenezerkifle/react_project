import React from "react";

const SearchBox = ({ value, onSearch }) => {
  return (
    <input
      placeholder="search..."
      onChange={(e) => onSearch(e.currentTarget.value)}
      name="Query"
      className="form-control my-3" // my-3 : margin y(top and button) 3(value)
      value={value}
    />
  );
};

export default SearchBox;
