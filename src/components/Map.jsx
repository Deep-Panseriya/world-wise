import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styles from "./Map.module.css";
import { useSearchParams } from "react-router-dom";

export default function Map() {
    const [searchParams] = useSearchParams()
  return (
    <div className={styles.mapContainer}>
      <MapContainer
        className={styles.map}
        center={[51.505, -0.09]}
        zoom={6}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />

        <Marker position={[51.505, -0.09]}>
          <Popup>
            <span>📍</span>
            <span>London</span>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
