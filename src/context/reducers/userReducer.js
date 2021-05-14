export const ADD_USER = "ADD_USER";
export const ADD_USER_PLACE = "ADD_USER_PLACE";
export const ADD_USER_COMMENT = "ADD_USER_COMMENT";
export const ADD_USER_LIKE = "ADD_USER_LIKE";

export function userReducer(state, action) {
  switch (action.type) {
    case ADD_USER:
      return { ...action.payload };
    case ADD_USER_PLACE:
      return { ...state, places: [...state.places, action.payload] };
    case ADD_USER_COMMENT:
      return { ...state, comments: [...state.comments, action.payload] };

    default:
      throw new Error();
  }
}
