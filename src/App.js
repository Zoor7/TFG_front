import { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Header from "./components/header/Header.jsx";
import PlacesContext from "./context/placesContext/placesContext.jsx";
import {SiteRoutes} from './components/Routes/Routes.jsx'

import CircleLoader from "react-spinners/CircleLoader";
import { css } from "@emotion/react";


import "./App.scss";


const override = css`
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
          <div className='container'>
            {SiteRoutes()}
          </div>
          {/* <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/lugar/:id" component={Detalle} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/create" component={CreatePlace} />
            <Route path="/explorar" component={Explorar} />
            <Route path="/favPlaces" component={FavPlaces} />
            <Route path="/stats" component={Stats} />
            <Route component={NotFound} />
          </Switch> */}
        </div>
      </Router>
    );
  } else return <CircleLoader css={override} size="4rem" />;
};

export default App;
