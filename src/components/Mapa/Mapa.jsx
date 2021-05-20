import React, { useEffect, useState } from "react";
import { Circle, GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useHistory } from "react-router-dom";

import person from "../../assets/icons/person.png";
import customMarker from "../../assets/icons/marker-place.png";

const containerStyle = {
  width: "100%",
  height: "40vh",
};

const Mapa = ({ place, explorar, create, getPos }) => {
  const GM_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
  const [position, setPosition] = useState();

  const history = useHistory();
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
  useEffect(() => {
    console.log(explorar);
    if (explorar) {
      setPosition(explorar.position);
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
        {place ? <Marker position={position} /> : null}

        {explorar ? (
          <div>
            <Marker icon={person} position={position} />
            <Circle radius={explorar.kms * 1000} center={position} />
            {explorar.places.map((place) => (
              <div key={place.id}>
                <Marker
                  icon={customMarker}
                  position={{
                    lat: place.location.coordinates[0],
                    lng: place.location.coordinates[1],
                  }}
                  onClick={() => history.push(`/lugar/${place.id}`)}
                />
              </div>
            ))}
          </div>
        ) : null}

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
