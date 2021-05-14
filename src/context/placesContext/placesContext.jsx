import React, { useEffect, useReducer } from "react";
import { ADD_PLACES, placeReducer } from "../reducers/placesreducer";

import { getPlaces } from "../../services/placesService";

const PlacesContext = React.createContext();

const initialState = {
  places: [],
  rangePlaces: [],
};

export const PlacesProvider = ({ children }) => {
  const [placesState, placesDispatch] = useReducer(placeReducer, initialState);

  useEffect(() => {
    (async () => {
      // console.log('object')
      const places = await getPlaces();
      placesDispatch({ type: ADD_PLACES, payload: places });
    })();
  }, []);

  const values = {
    placesState,
    placesDispatch,
  };

  return (
    <PlacesContext.Provider value={values}>{children}</PlacesContext.Provider>
  );
};

export default PlacesContext;
