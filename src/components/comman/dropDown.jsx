const Dropdown = ({ error, label, name, options, value, ...rest }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <select
        {...rest}
        name={name}
        className="custom-select"
        id="inputGroupSelect04"
        defaultValue=""
      >
        {options.map((option) => (
          <option value={option["name"]} key={option["_id"]}>
            {option["name"]}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Dropdown;
