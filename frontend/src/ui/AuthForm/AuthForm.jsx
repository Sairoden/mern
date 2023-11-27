// React & Libraries
import { useState } from "react";

// Styles
import "./AuthForm.css";

// UI Components
import { Card, Input, Button, LoadingSpinner } from "../index";

// Utilities
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../utils";

// Hooks
import { useForm, useSignup, useLogin } from "../../hooks";

function AuthForm() {
  const { signup, isPending } = useSignup();
  const { login, isPending: isPendingLogin } = useLogin();

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
      login({
        email: formState.inputs.email.value,
        password: formState.inputs.password.value,
      });
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
      {isPending && <LoadingSpinner asOverlay />}
      {isPendingLogin && <LoadingSpinner asOverlay />}
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
            disabled={isPending || isPendingLogin}
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
          disabled={isPending || isPendingLogin}
        />
        <Input
          id="password"
          label="Password"
          element="input"
          type="password"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid password (at least 5 chars.)"
          onInput={inputHandler}
          disabled={isPending || isPendingLogin}
        />
        <Button
          type="submit"
          disabled={!formState.isValid || isPending || isPendingLogin}
        >
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
