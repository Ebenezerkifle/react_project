const Input = ({ name, label, error, onchange, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        // type={type}
        // value={value}
        {...rest} //helps to spreed all rest props with the same naming!
        onChange={onchange}
        name={name}
        id={name}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
