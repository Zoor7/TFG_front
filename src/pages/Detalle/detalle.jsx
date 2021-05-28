import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router";
import PlaceCard from "../../components/placeCard/placeCard";
import PlacesContext from "../../context/placesContext/placesContext";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

import "./detalle.scss";

const override = css`
  border-color: #181818;
`;

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
      <div className='container detalle-main'>
        <PlaceCard place={currentPlace} />
      </div>
    );
  } else return (
    <div className='loading'>
      <ClipLoader css={override} size="4rem" />;
    </div>
  )
};

export default Detalle;
