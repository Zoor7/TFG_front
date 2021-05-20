import { useContext } from "react";

import PlaceCard from "../../components/placeCard/placeCard";
import UserContext from "../../context/userContext/userContext";
import { getPlaceById } from "../../services/placesService";
import { favUserPlaces } from "../../services/userService";

import "./favPlaces.scss";
const FavPlaces = () => {
  const { userState } = useContext(UserContext);

  //   ESTO NO FUNCIONA, he intentado obtener desde el backend pero no atinaba con el populate
  const favoritePlaces = [];
  const favPlace = async (userId) => {
    const test = await favUserPlaces(userId);
    console.log(test.likes);

    // const favoritePlaces = [];

    test.forEach(async (favPlaceId) => {
      const place = await getPlaceById(favPlaceId);
      favoritePlaces.push(place);
    });

    console.log(favoritePlaces);
  };
  return (
    <section className="container">
      <button onClick={() => favPlace(userState.id)}>CLICK</button>
      {/* {userState.likes.map((place) => (
        <article key={place.id}>
          <PlaceCard place={place} urlTo={`/lugar/${place.id}/descripcion`} />
        </article>
      ))} */}
    </section>
  );
};

export default FavPlaces;
