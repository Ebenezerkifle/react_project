const Dropdown = ({ error, label, name, options, value, ...rest }) => {
  //console.log("value: ", value["name"]);
  return (
    <div className="form-group">
      <label>{label}</label>
      <select
        {...rest}
        name={name}
        className="custom-select"
        id="inputGroupSelect04"
      >
        <option value="" />
        {options.map((option) => (
          <option value={option._id ?? ""} key={option._id}>
            {option.name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Dropdown;
