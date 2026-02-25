import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styles from "./Map.module.css";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

export default function Map() {
    const [searchParams] = useSearchParams()
    const lat = searchParams.get("lat")
    console.log(lat)
    const [position , setPosition] = useState([40,0])
  return (
    <div className={styles.mapContainer}>
      <MapContainer
        className={styles.map}
        center={position}
        zoom={6}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />

        <Marker position={position}>
          <Popup>
            <span>📍</span>
            <span>London</span>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
