import { useContext, useEffect, useState } from "react";

import PlaceCard from "../../components/placeCard/placeCard";
import UserContext from "../../context/userContext/userContext";
import { getPlaceById } from "../../services/placesService";
import { favUserPlaces } from "../../services/userService";

import "./favPlaces.scss";
const FavPlaces = () => {
  const { userState } = useContext(UserContext);
  const [likes, setLikes] = useState([])


  // const favoritePlaces = [];

  useEffect(() => {
    setLikes(userState.likes)
  }, [userState])

  // const favPlace = async (userId) => {
  //   const test = await favUserPlaces(userId);

  //   const forLoop = async () => {

  //     for (let index = 0; index < test.likes.length; index++) {
  //       const favoritePlaceId = test.likes[index];
  //       favoritePlaces[index] = await getPlaceById(favoritePlaceId);
  //     }

  //   };

  //   forLoop();

  //   console.log(favoritePlaces);
  // };

  return (
    <section className="container">
      {/* <button onClick={() => favPlace(userState.id)}>Cargar lugares favoritos</button> */}

      {/* {userState.likes.map((place) => (
        <article key={place.id}>
          <PlaceCard place={place} urlTo={`/lugar/${place.id}/descripcion`} />
        </article>
      ))} */}
      {likes.map(place=>
      <article key={place.id}>
        <PlaceCard  place={place}/>
      </article>)}
    </section>
  );
};

export default FavPlaces;
