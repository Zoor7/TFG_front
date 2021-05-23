import { useContext } from "react";

import PlaceCard from "../../components/placeCard/placeCard";
import PlacesContext from "../../context/placesContext/placesContext";

import "./home.scss";

const Home = () => {
  const { placesState } = useContext(PlacesContext);

  return (
    <section className="home-container container">
      {placesState.places.map((place) => (
        <article key={place.id}>
          <PlaceCard place={place} urlTo={`/lugar/${place.id}/descripcion`} />
        </article>
      ))}
    </section>
  );
};

export default Home;
