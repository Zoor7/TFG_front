import { useContext, useState, useEffect } from "react";

import PlaceCard from "../../components/placeCard/placeCard";
import PlacesContext from "../../context/placesContext/placesContext";
import UserContext from "../../context/userContext/userContext";

import "./home.scss";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const { placesState } = useContext(PlacesContext);
  const { userState } = useContext(UserContext);

  useEffect(() => {
    setLoading(true);
    console.log("hola");

    setTimeout(() => {
      setLoading(false);
    }, 0);
  }, [userState]);

  if (!loading) {
    return (
      <section className="home-container container">
        {placesState.places.map((place) => (
          <article key={place.id}>
            <PlaceCard place={place} urlTo={`/lugar/${place.id}/descripcion`} />
          </article>
        ))}
      </section>
    );
  } else
    return (
      <div className="loading">
        <h2>Loading</h2>
      </div>
    );
};

export default Home;
