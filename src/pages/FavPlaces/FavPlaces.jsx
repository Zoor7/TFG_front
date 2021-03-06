import { useContext, useEffect, useState } from "react";

import PlaceCard from "../../components/placeCard/placeCard";
import UserContext from "../../context/userContext/userContext";

import "./favPlaces.scss";
const FavPlaces = () => {
  const { userState } = useContext(UserContext);
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setLikes(userState.likes);
    }, 300);
  }, [userState]);

  return (
    <div className="fav-main">
      {likes.length > 0 ? (
        <section className="container">
          {likes.map((place) => (
            <article key={place.id}>
              <PlaceCard place={place} />
            </article>
          ))}
        </section>
      ) : (
        <div className="title-fav-container">
          <h2>
            Todavía no tienes lugares favoritos, prueba a dar like a algún
            lugar!
          </h2>
        </div>
      )}
    </div>
  );
};

export default FavPlaces;
