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
import Register from "./pages/LoginReg/Register.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import Explorar from "./pages/Explorar/Explorar.jsx";
import FavPlaces from "./pages/FavPlaces/FavPlaces.jsx";
import Stats from "./pages/Stats/Stats.jsx";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: #181818;
`;

const App = () => {
  const [loading, setLoading] = useState(true);

  const { placesState } = useContext(PlacesContext);

  useEffect(() => {
    if (placesState.places) {
      setLoading(false);
    }
  }, [placesState]);

  if (!loading) {
    return (
      <Router>
        <div className="main-container">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/lugar/:id" component={Detalle} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/create" component={CreatePlace} />
            <Route path="/explorar" component={Explorar} />
            <Route path="/favPlaces" component={FavPlaces} />
            <Route path="/stats" component={Stats} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  } else return <CircleLoader css={override} size="4rem" />;
};

export default App;
