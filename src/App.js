import { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home/home.jsx";
import Detalle from "./pages/Detalle/detalle";
import CreatePlace from "./pages/CreatePlace/CreatePlace.jsx";
import Header from "./components/header/Header.jsx";
import PlacesContext from "./context/placesContext/placesContext.jsx";

import CircleLoader from "react-spinners/CircleLoader";
import { css } from "@emotion/react";

import "./App.scss";
import Login from "./pages/LoginReg/Login.jsx";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: #181818;
`;

const App = () => {
  const [loading, setLoading] = useState(true);

  const { state } = useContext(PlacesContext);

  useEffect(() => {
    if (state.places) {
      setLoading(false);
    }
  }, []);

  if (!loading) {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/lugar/:id" component={Detalle} />
          <Route path="/login" component={Login} />

          <Route path="/create" component={CreatePlace} />
        </Switch>
      </Router>
    );
  } else return <CircleLoader css={override} size="4rem" />;
};

export default App;
