import { useState, useEffect, useContext } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/Home/home.jsx'
import Header from "./components/header/Header.jsx";
import PlacesContext from './context/placesContext/placesContext.jsx';
import Detalle from './pages/Detalle/detalle'

import CircleLoader from "react-spinners/CircleLoader";
import { css } from "@emotion/react";

import './App.scss';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: #181818;
`

const App = () => {
  const [loading, setLoading] = useState(true)

  const { state } = useContext(PlacesContext)

  useEffect(() => {
    if (state.places) {
        setLoading(false)
    }
  }, [])

  if (!loading) {
    return (
        <Router>
        <Header />
          <Switch>
            <Route  exact path="/" component={Home} />
            <Route path="/lugar/:id" component={Detalle} />
          </Switch>
        </Router>
    );
  } else return <CircleLoader css={override} size='4rem' />
}

export default App;
