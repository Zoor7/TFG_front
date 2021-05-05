import { useContext } from "react";

import PlaceCard from "../../components/placeCard/placeCard";
import PlacesContext from "../../context/placesContext/placesContext";

import "./home.scss";

const Home = () => {
  const { state } = useContext(PlacesContext);

  console.log(state.places);
  return (
    <div className="home-container">
      {state.places.map((place) => (
        <li key={place.id} style={{ listStyle: "none" }}>
          <PlaceCard place={place} urlTo={`/lugar/descripcion/${place.id}`} />
        </li>
      ))}
    </div>
  );
};

export default Home;
