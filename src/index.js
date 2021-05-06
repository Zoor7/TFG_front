import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { PlacesProvider } from "./context/placesContext/placesContext.jsx";
import { UserProvider } from "./context/userContext/userContext";

ReactDOM.render(
  <PlacesProvider>
    <UserProvider>
      <App />
    </UserProvider>
  </PlacesProvider>,
  document.getElementById("root")
);
