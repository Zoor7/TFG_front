import { NavLink } from "react-router-dom";

import "./navDetalle.scss";

const NavDetalle = ({ place }) => {
  return (
    <div className="nav-detalle">
      <ul>
        <NavLink
          activeClassName="nav-item-active"
          className="nav-link"
          to={{ pathname: `/lugar/descripcion/${place.id}`, state: { place } }}
        >
          Descripción
        </NavLink>
        <NavLink
          activeClassName="nav-item-active"
          className="nav-link"
          to={{ pathname: `/lugar/comentarios/${place.id}`, state: { place } }}
        >
          Comentarios
        </NavLink>
        <NavLink
          activeClassName="nav-item-active"
          className="nav-link"
          to={{ pathname: `/lugar/ubicacion/${place.id}`, state: { place } }}
        >
          Ubicación
        </NavLink>
      </ul>
    </div>
  );
};

export default NavDetalle;
