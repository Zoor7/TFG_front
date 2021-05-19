export const ADD_PLACES = "ADD_PLACES";
export const ADD_PLACE = "ADD_PLACE";
export const UPDATE_PLACE = "UPDATE_PLACE";
export const ADD_PLACE_LIKES = "ADD_PLACE_LIKES";
export const DELETE_PLACE_LIKES = "DELETE_PLACE_LIKES";

export function placeReducer(state, action) {
  switch (action.type) {
    case ADD_PLACES:
      return { places: action.payload };
    case UPDATE_PLACE:
      const updatedPlaces = state.places.filter(
        (place) => place.id !== action.payload.id
      );
      return {
        ...state,
        places: [...updatedPlaces, action.payload].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        ),
      };
    case ADD_PLACE:
      return { ...state, places: [action.payload, ...state.places] };

    case ADD_PLACE_LIKES:
      const place = state.places.filter(
        (place) => place.id === action.payload.placeId
      );
      const newPlace = {
        ...place[0],
        likes: [...place[0].likes, action.payload.userId],
      };
      const newArr = state.places.filter(
        (place) => place.id !== action.payload.placeId
      );

      return {
        ...state,
        places: [...newArr, newPlace].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        ),
      };

    case DELETE_PLACE_LIKES:
      const updatePlaceLikes = state.places.filter(
        (place) => place.id === action.payload.placeId
      );
      const newLikes = updatePlaceLikes[0].likes.filter(
        (like) => like !== action.payload.userId
      );
      const placeUpdated = {
        ...updatePlaceLikes[0],
        likes: [...newLikes],
      };
      const newPlaces = state.places.filter(
        (place) => place.id !== action.payload.placeId
      );

      return {
        ...state,
        places: [...newPlaces, placeUpdated].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        ),
      };

    default:
      throw new Error();
  }
}
