const SearchInput = ({ name, onchange }) => {
  return (
    <input
      placeholder="search..."
      onChange={onchange}
      name={name}
      id={name}
      className="form-control"
    ></input>
  );
};

export default SearchInput;
