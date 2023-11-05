// Styles
import "./PlaceForm.css";

// UI Components
import { Input } from "../index";

// Utilities
import { VALIDATOR_REQUIRE } from "../../utils";

function PlaceForm() {
  return (
    <form className="place-form">
      <Input
        type="text"
        label="Title"
        element="input"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
      />
    </form>
  );
}

export default PlaceForm;
