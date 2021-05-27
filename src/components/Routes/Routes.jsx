import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CSSTransition } from 'react-transition-group'
import Login from "../../pages/LoginReg/Login.jsx";
import Register from "../../pages/LoginReg/Register.jsx";
import NotFound from "../../pages/NotFound/NotFound.jsx";
import Explorar from "../../pages/Explorar/Explorar.jsx";
import FavPlaces from "../../pages/FavPlaces/FavPlaces.jsx";
import Stats from "../../pages/Stats/Stats.jsx";
import Home from "../../pages/Home/home.jsx";
import Detalle from "../../pages/Detalle/detalle";
import CreatePlace from "../../pages/CreatePlace/CreatePlace.jsx";


const routes = [
    { path: '/', name: 'Home', Component: Home },
    { path: '/lugar/:id', name: 'Detalle', Component: Detalle },
    { path: '/login', name: 'Login', Component: Login },
    { path: '/register', name: 'Register', Component: Register },
    { path: '/create', name: 'Create', Component: CreatePlace },
    { path: '/explorar', name: 'Explorar', Component: Explorar },
    { path: '/favPlaces', name: 'FavPlaces', Component: FavPlaces },
    { path: '/stats', name: 'Stats', Component: Stats },
    // { path: '*', name: 'notFound', Component: NotFound },
  ]
  
  export function SiteRoutes() {
    const routeComponents = routes.map(({ path, Component }) => (
      <Route key={path} exact path={path}>
        {({ match }) => (
          <CSSTransition
            in={match != null}
            timeout={300}
            classNames="page"
            unmountOnExit
          >
            <div className="page">
              <Component />
              {console.log(match != null)}
            </div>
          </CSSTransition>
        )}
      </Route>
    ));
  
    routeComponents.push(
      <Route>
        {routeProps => {
          console.log(routeProps);
          if ( routes.filter(r => r.path === routeProps.location.pathname).length === 0 ) {
            return (
              <CSSTransition
                in={routeProps.match != null}
                timeout={300}
                classNames="fade"
                unmountOnExit
              >
                <NotFound/>
              </CSSTransition>
            );
          } else {
            return <div></div>;
          }
        }}
      </Route>
    );
  
    return routeComponents;
  }