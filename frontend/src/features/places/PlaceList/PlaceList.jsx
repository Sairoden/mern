// Styles
import "./PlaceList.css";

// Features Components
import { PlaceItem } from "../../index";

// UI Components
import { Card } from "../../../ui";

function PlaceList({ items }) {
  if (items.length === 0)
    return (
      <div className="place-list center">
        <Card>
          <h2>No places found. Maybe create one?</h2>
          <button>Share Place</button>
        </Card>
      </div>
    );

  return (
    <ul className="place-list">
      {items.map(place => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
        />
      ))}
    </ul>
  );
}

export default PlaceList;
