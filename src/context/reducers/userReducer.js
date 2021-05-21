export const ADD_USER = "ADD_USER";
export const ADD_USER_PLACE = "ADD_USER_PLACE";
export const ADD_USER_COMMENT = "ADD_USER_COMMENT";
export const ADD_USER_LIKE = "ADD_USER_LIKE";
export const DELETE_USER_LIKE = "DELETE_USER_LIKE";

export function userReducer(state, action) {
  switch (action.type) {
    case ADD_USER:
      return { ...action.payload };
    case ADD_USER_PLACE:
      return { ...state, places: [...state.places, action.payload] };
    case ADD_USER_COMMENT:
      return { ...state, comments: [...state.comments, action.payload] };
    case ADD_USER_LIKE:
      return { ...state, likes: [...action.payload.likes] };
    case DELETE_USER_LIKE:
      const likesUpdated = state.likes.filter(
        (like) => like.id !== action.payload
      );
      return { ...state, likes: [...likesUpdated] };

    default:
      throw new Error();
  }
}
