import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home/home.jsx'
import './App.scss';
import Header from "./components/header/Header.jsx";
import Descripcion from "./pages/Detalle/descripcion.jsx";
import NavDetalle from "./components/navDetalle/navDetalle.jsx";

const App=()=> {
  return (

    <Router>
      <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/detalle/descripcion" component={Descripcion} />
        </Switch>
      </Router>
    
  );
}

export default App;
