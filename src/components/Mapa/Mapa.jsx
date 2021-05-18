import React, { useEffect, useState } from "react";
import { Circle, GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "40vh",
};

const Mapa = ({ place, explorar, create, getPos }) => {
  const GM_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
  const [position, setPosition] = useState();
  console.log(process.env.REACT_APP);
  useEffect(() => {
    if (place) {
      const position = {
        lat: place.location.coordinates[0],
        lng: place.location.coordinates[1],
      };
      setPosition(position);
    }
  }, [place]);

  useEffect(() => {
    if (create) {
      getCurrentPosition();
    }
  }, []);

  const setNewPositionMarker = (marker) => {
    const coords = {
      lat: marker.latLng.lat(),
      lng: marker.latLng.lng(),
    };
    getPos(coords);
    setPosition(coords);
  };

  const getCurrentPosition = async () => {
    navigator.geolocation.getCurrentPosition((res) => {
      const coords = {
        lat: res.coords.latitude,
        lng: res.coords.longitude,
      };
      getPos(coords);
      setPosition(coords);
    });
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={position} zoom={15}>
        {explorar ? <Marker position={position} /> : null}

        {place ? <Circle radius={1000} center={position} /> : null}

        {create ? (
          <Marker
            position={position}
            draggable={true}
            onDragEnd={setNewPositionMarker}
          />
        ) : null}

        <></>
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(Mapa);
