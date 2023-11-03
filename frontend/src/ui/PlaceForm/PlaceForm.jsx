// Styles
import "./PlaceForm.css";

// UI Components
import { Input } from "../index";

function PlaceForm() {
  return (
    <form className="place-form">
      <Input type="text" label="Title" element="input" />
    </form>
  );
}

export default PlaceForm;
