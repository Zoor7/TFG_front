import { useContext, useEffect, useState } from "react";

import PlaceCard from "../../components/placeCard/placeCard";
import UserContext from "../../context/userContext/userContext";

import "./favPlaces.scss";
const FavPlaces = () => {
  const { userState } = useContext(UserContext);
  const [likes, setLikes] = useState([]);


  useEffect(() => {
    setLikes(userState.likes);
  }, [userState]);


  return (
    <section className="container">

      {likes.map(place =>
        <article key={place.id}>
          <PlaceCard place={place} />
        </article>)}
    </section>
  );
};

export default FavPlaces;
