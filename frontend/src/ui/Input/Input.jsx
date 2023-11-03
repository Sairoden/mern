// React & Libraries
import { useReducer } from "react";

// Styles
import "./Input.css";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return { ...state, value: action.payload, isValid: true };

    default:
      return state;
  }
};

const INITIAL_STATE = {
  value: "",
  isValid: false,
};

function Input(props, { id, rows, placeholder, type }) {
  const [{ value, isValid }, dispatch] = useReducer(
    inputReducer,
    INITIAL_STATE
  );

  const changeHandler = e => {
    dispatch({ type: "CHANGE", payload: e.target.value });
  };

  const element =
    props.element === "input" ? (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={changeHandler}
        value={value}
      />
    ) : (
      <textarea
        id={id}
        rows={rows || 3}
        onChange={changeHandler}
        value={value}
      />
    );

  return (
    <div className={`form-control ${!isValid && "form-control--invalid"}`}>
      <label htmlFor={id}>{props.label}</label>
      {element}
      {!isValid && <p>{props.errorText}</p>}
    </div>
  );
}

export default Input;
