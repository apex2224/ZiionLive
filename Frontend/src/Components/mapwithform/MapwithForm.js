import React from 'react';
import styles from './MapwithForm.module.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapWithForm = () => {
  return (
    <div className={styles.wrapper}>
      {/* Left: Map */}
      <div className={styles.mapSection}>
        <MapContainer
          center={[28.6139, 77.2090]}
          zoom={13}
          className={styles.map}
          scrollWheelZoom={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          <Marker position={[28.6139, 77.2090]}>
            <Popup>Mohali, India</Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* Right: Form */}
      <div className={styles.formSection}>
        <h2>Contact Us</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="Your Name" />

          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Your Email" />

          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Your Message"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default MapWithForm;
