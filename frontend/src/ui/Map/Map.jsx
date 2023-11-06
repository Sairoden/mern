// React & Libraries
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// Styles
import "./Map.css";

function Map({ className, style, center, zoom, address }) {
  return (
    <div className="mapContainer">
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
        className={`map ${className}`}
        style={style}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <Marker position={center}>
          <Popup>{address}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
