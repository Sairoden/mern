// Styles
import "./Input.css";

function Input(props, { id, rows, placeholder, type }) {
  const element =
    props.element === "input" ? (
      <input id={id} type={type} placeholder={placeholder} />
    ) : (
      <textarea id={id} rows={rows || 3} />
    );

  return (
    <div className={`form-control`}>
      <label htmlFor={id}>{props.label}</label>
      {element}
    </div>
  );
}

export default Input;
