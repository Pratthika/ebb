import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';

const LocationMap = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    // Fetch donor and recipient locations from the backend
    const fetchLocations = async () => {
      try {
        const response = await axios.get('/api/locations');
        setLocations(response.data);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };

    fetchLocations();
  }, []);

  return (
    <div>
      <h2>Location Map</h2>
      <p>
        Use the map below to locate donors or recipients near you. This feature
        helps in finding the nearest blood donation or request location.
      </p>
      <div style={{ width: '100%', height: '400px', border: '1px solid #ccc' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBeE37r59CNvg9H7rFjKmzM6PWI-PN5y-g' }} // Replace with your Google Maps API key
          defaultCenter={{ lat: 0, lng: 0 }}
          defaultZoom={2}
        >
          {locations.map((location, index) => (
            <Marker
              key={index}
              lat={location.lat}
              lng={location.lng}
              text={location.type === 'donor' ? 'Donor' : 'Recipient'}
            />
          ))}
        </GoogleMapReact>
      </div>
    </div>
  );
}

const Marker = ({ text }) => <div style={{ color: 'red' }}>{text}</div>;

export default LocationMap;
