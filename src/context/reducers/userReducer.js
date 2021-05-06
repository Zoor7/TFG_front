export const ADD_USER = "ADD_USER";
export const UPDATE_USER = "UPDATE_USER";

export function userReducer(state, action) {
  switch (action.type) {
    case ADD_USER:
      return { ...action.payload };
    case UPDATE_USER:
      return { ...state, ...action.payload };

    default:
      throw new Error();
  }
}
