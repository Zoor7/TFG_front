import React, { useEffect, useReducer } from "react";
import { userReducer } from "../reducers/userReducer";

const UserContext = React.createContext();

const initialState = {
  id: "",
  username: "",
  name: "",
  email: "",
  avatar: "",
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {}, []);

  const values = {
    state,
    dispatch,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserContext;
