export function placeReducer(state, action) {
  switch (action.type) {
    case "ADD_PLACES":
      return { places: action.payload };
    case "UPDATE_PLACE":
      return { places: [...state.places, action.payload] };

    default:
      throw new Error();
  }
}
