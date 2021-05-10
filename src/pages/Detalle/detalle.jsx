import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router";
import PlaceCard from "../../components/placeCard/placeCard";
import PlacesContext from "../../context/placesContext/placesContext";
import "./detalle.scss";

const Detalle = () => {
  const [currentPlace, setCurrentPlace] = useState();
  const { placesState } = useContext(PlacesContext);
  let params = useParams();

  useEffect(() => {
    (async () => {
      const place = await placesState.places.find(
        (place) => place.id === params.id
      );
      setCurrentPlace(place);
    })();
  }, [placesState]);

  if (currentPlace) {
    return (
      <div style={{ paddingBottom: "2rem" }}>
        <PlaceCard place={currentPlace} />
      </div>
    );
  } else return <h1>Loading</h1>;
};

export default Detalle;
