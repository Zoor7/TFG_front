export const ADD_PLACES = "ADD_PLACES";
export const UPDATE_PLACE = "UPDATE_PLACE";

export function placeReducer(state, action) {
  switch (action.type) {
    case ADD_PLACES:
      return { places: action.payload };
    case UPDATE_PLACE:
      const updatedPlaces = state.places.filter(
        (place) => place.id !== action.payload.id
      );
      return { ...state, places: [...updatedPlaces, action.payload] };

    default:
      throw new Error();
  }
}
