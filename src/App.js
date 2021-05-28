import { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home/home.jsx";
import Detalle from "./pages/Detalle/detalle";
import CreatePlace from "./pages/CreatePlace/CreatePlace.jsx";
import Header from "./components/header/Header.jsx";
import PlacesContext from "./context/placesContext/placesContext.jsx";

import ClockLoader from "react-spinners/ClockLoader";
import { css } from "@emotion/react";
import { CSSTransition,TransitionGroup } from "react-transition-group";

import "./App.scss";
import Login from "./pages/LoginReg/Login.jsx";
import Register from "./pages/LoginReg/Register.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import Explorar from "./pages/Explorar/Explorar.jsx";
import FavPlaces from "./pages/FavPlaces/FavPlaces.jsx";
import Stats from "./pages/Stats/Stats.jsx";
import Logout from "./pages/Logout/Logout.jsx";

const override = css`
  display:flex
  margin: auto auto;
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
      <Router >
        <div className="main-container">
          <Header />
        <Route
          render={({ location }) => {
            const { pathname } = location;
            return (
              <TransitionGroup className='container'>
                <CSSTransition 
                  key={pathname}
                  classNames="page"
                  timeout={300}
                  unmountOnExit
                >
                  <div className='page'>
                  <Route
                    location={location}
                    render={() => (
                      <Switch>
                      <Route exact path="/" component={Home} />
                      <Route  path="/lugar/:id" component={Detalle} />
                      <Route exact path="/login" component={Login} />
                      <Route exact path="/register" component={Register} />
                      <Route exact path="/create" component={CreatePlace} />
                      <Route exact path="/explorar" component={Explorar} />
                      <Route exact path="/favPlaces" component={FavPlaces} />
                      <Route exact path="/logout" component={Logout} />
                      <Route exact path="/stats" component={Stats} />
                      <Route component={NotFound} />
                    </Switch>
                    )}
                  />
                  </div>
                </CSSTransition>
              </TransitionGroup>
            );
          }}
        />
      </div>
      </Router>
    );
  } else return <ClockLoader css={override} size="4rem" />;
};

export default App;
