// React & Libraries
import { useReducer, useEffect } from "react";

// Styles
import "./Input.css";

// Utilities
import { validate } from "../../utils";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.payload,
        isValid: validate(action.payload, action.validators),
      };

    case "TOUCH":
      return { ...state, isTouched: true };

    default:
      return state;
  }
};

const INITIAL_STATE = {
  value: "",
  isValid: false,
  isTouched: false,
};

function Input(props) {
  const [{ value, isValid, isTouched }, dispatch] = useReducer(
    inputReducer,
    INITIAL_STATE
  );

  const { onInput, id, rows, placeholder, type } = props;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, isValid, onInput, value]);

  const changeHandler = e => {
    dispatch({
      type: "CHANGE",
      payload: e.target.value,
      validators: props.validators,
    });
  };

  const touchHandler = () => {
    dispatch({ type: "TOUCH" });
  };

  const element =
    props.element === "input" ? (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={value}
      />
    ) : (
      <textarea
        id={id}
        rows={rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={value}
      />
    );

  return (
    <div
      className={`form-control ${
        !isValid && isTouched && "form-control--invalid"
      }`}
    >
      <label htmlFor={id}>{props.label}</label>
      {element}
      {!isValid && isTouched && <p>{props.errorText}</p>}
    </div>
  );
}

export default Input;
