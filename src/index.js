import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ToastContainer } from "react-toastify";

import { PlacesProvider } from "./context/placesContext/placesContext.jsx";
import { UserProvider } from "./context/userContext/userContext";

import "react-toastify/dist/ReactToastify.css";
import "./index.css";

ReactDOM.render(
  <PlacesProvider>
    <UserProvider>
      <ToastContainer />

      <App />
    </UserProvider>
  </PlacesProvider>,
  document.getElementById("root")
);
