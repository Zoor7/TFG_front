import React, { useEffect, useReducer } from "react";
import { placeReducer } from "../reducers/placesreducer";

import { getPlaces } from "../../services/placesService";

const PlacesContext = React.createContext();

const initialState = {
  places: [],
  rangePlaces: [],
};

export const PlacesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(placeReducer, initialState);

  useEffect(() => {
    (async () => {
      console.log("AAAAAAAAAAA");
      const places = await getPlaces();
      dispatch({ type: "ADD_PLACES", payload: places });
    })();
  }, []);

  const values = {
    state,
    dispatch,
  };

  return (
    <PlacesContext.Provider value={values}>{children}</PlacesContext.Provider>
  );
};

export default PlacesContext;
