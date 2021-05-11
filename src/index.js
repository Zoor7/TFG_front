import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { PlacesProvider } from "./context/placesContext/placesContext.jsx";
import { UserProvider } from "./context/userContext/userContext";
import { ToastContainer } from "react-toastify";

ReactDOM.render(
  <PlacesProvider>
    <UserProvider>
      <ToastContainer />

      <App />
    </UserProvider>
  </PlacesProvider>,
  document.getElementById("root")
);
