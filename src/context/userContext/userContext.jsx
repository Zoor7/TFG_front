import React, { useEffect, useReducer } from "react";
import { userReducer } from "../reducers/userReducer";

const UserContext = React.createContext();

const initialState = {
  id: "",
  username: "",
  email: "",
  avatar: "",
  places: [],
  likes: [],
};

export const UserProvider = ({ children }) => {
  const [userState, userDispatch] = useReducer(userReducer, initialState);

  useEffect(() => {}, []);

  const values = {
    userState,
    userDispatch,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserContext;
