// React & Libraries
import { useParams } from "react-router-dom";

// Features Components
import { PlaceList } from "../features";

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
    title: "England",
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

function UserPlaces() {
  const { userId } = useParams();
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);

  return <PlaceList items={loadedPlaces} />;
}

export default UserPlaces;
