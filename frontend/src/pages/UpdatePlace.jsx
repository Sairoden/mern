// React & Libraries
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Styles
import "../ui/PlaceForm/PlaceForm.css";

// UI Components
import { Input, Button } from "../ui";

// Utilities
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../utils";

// Hooks
import { useForm } from "../hooks";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Manila",
    description: "Stinky place and I don't want to work here",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/b4/Makati_City_Lights2_%28Jopet_Sy%29_-_Flickr.jpg",
    address: "Manila, Metro Manila",
    location: {
      lat: 14.5973628,
      lng: 120.98013,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Manila",
    description: "Stinky place and I don't want to work here",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/f1/Manila_Harbour_View_by_night_%28Thomas_Yie%29_-_Flickr.jpg",
    address: "Manila, Metro Manila",
    location: {
      lat: 14.5973628,
      lng: 120.98013,
    },
    creator: "u2",
  },
];

function UpdatePlace() {
  const [isLoading, setIsLoading] = useState(true);
  const { placeId } = useParams();

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const identifiedPlace = DUMMY_PLACES.find(place => place.id === placeId);

  useEffect(() => {
    setIsLoading(true);

    setFormData(
      {
        title: {
          value: identifiedPlace.title,
          isValid: true,
        },
        description: {
          value: identifiedPlace.description,
          isValid: true,
        },
      },
      true
    );

    setIsLoading(false);
  }, [identifiedPlace.description, identifiedPlace.title, setFormData]);

  const placeUpdateSubmitHandler = e => {
    e.preventDefault();

    console.log(formState.inputs);
  };

  if (!identifiedPlace)
    return (
      <div className="center">
        <h2>Could not find place!</h2>;
      </div>
    );

  if (isLoading)
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );

  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        type="text"
        element="input"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 characters)."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />

      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
}

export default UpdatePlace;
