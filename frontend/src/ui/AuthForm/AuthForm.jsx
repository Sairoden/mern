// React & Libraries
import { useState } from "react";

// Styles
import "./AuthForm.css";

// UI Components
import { Card, Input, Button } from "../index";

// Utilities
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../utils";

// Hooks
import { useForm, useSignup } from "../../hooks";

// Contexts
import { useAuthContext } from "../../contexts/auth_context";

function AuthForm() {
  const { login, logout } = useAuthContext();
  const { signup, isPending } = useSignup();

  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const authSubmitHandler = e => {
    e.preventDefault();

    if (isLoginMode) {
      login();
    } else {
      signup({
        name: formState.inputs.name.value,
        email: formState.inputs.email.value,
        password: formState.inputs.password.value,
      });
    }
  };

  const switchModeHandler = () => {
    if (!isLoginMode)
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    else
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
        },
        false
      );

    setIsLoginMode(prevMode => !prevMode);
  };

  return (
    <Card className="authentication">
      <h2>Login Required</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        {!isLoginMode && (
          <Input
            element="input"
            id="name"
            type="text"
            label="Your Name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a name"
            onInput={inputHandler}
            disabled={isPending}
          />
        )}
        <Input
          id="email"
          label="Email"
          element="input"
          type="email"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email address"
          onInput={inputHandler}
          disabled={isPending}
        />
        <Input
          id="password"
          label="Password"
          element="input"
          type="password"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid password (at least 5 chars.)"
          onInput={inputHandler}
          disabled={isPending}
        />
        <Button type="submit" disabled={!formState.isValid || isPending}>
          {isLoginMode ? "LOGIN" : "SIGNUP"}
        </Button>
      </form>

      <Button inverse onClick={switchModeHandler}>
        SWITCH TO {isLoginMode ? "SIGNUP" : "LOGIN"}
      </Button>
    </Card>
  );
}

export default AuthForm;
