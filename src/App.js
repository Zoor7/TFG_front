import {useState,useEffect,useContext} from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home/home.jsx'
import './App.scss';
import Header from "./components/header/Header.jsx";
import Descripcion from "./pages/Detalle/descripcion.jsx";
import PlacesContext from './context/placesContext/placesContext.jsx';

const App=()=> {
  const [loading, setLoading] = useState(true)

  const { state } = useContext(PlacesContext)

  useEffect(() => {
    if(state.places[0]){
      setLoading(false)
    }
  }, [state])
  if(!loading){
    return (
      <Router>
        <Header/>
        <Switch>
          <Route path="/" component={Home} />
          <Route exact path="/place/descripcion/:id" component={Descripcion} />
        </Switch>
      </Router>
    );
  }else return <h1>Loading</h1>
  }

export default App;
