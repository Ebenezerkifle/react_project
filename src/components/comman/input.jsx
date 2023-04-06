const Input = ({ value, onchange, name, label }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        //ref={this.password}
        value={value}
        onChange={onchange}
        name={name}
        id={name}
        type="text"
        className="form-control"
      />
    </div>
  );
};

export default Input;
