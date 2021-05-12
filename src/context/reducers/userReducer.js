export const ADD_USER = "ADD_USER";
export const ADD_USER_PLACE = "ADD_USER_PLACE";

export function userReducer(state, action) {
  switch (action.type) {
    case ADD_USER:
      console.log(action.payload);
      return { ...action.payload };
    case ADD_USER_PLACE:
      return { ...state, places: [...state.places, action.payload] };

    default:
      throw new Error();
  }
}
