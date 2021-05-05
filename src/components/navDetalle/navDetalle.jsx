import { NavLink } from "react-router-dom";

import "./navDetalle.scss";

const NavDetalle = ({ place }) => {
  return (
    <div className="nav-detalle">
      <ul>
        <NavLink
          activeClassName="nav-item-active"
          className="nav-link"
          to={{ pathname: `/lugar/${place.id}/descripcion` }}
        >
          Descripción
        </NavLink>
        <NavLink
          activeClassName="nav-item-active"
          className="nav-link"
          to={{ pathname: `/lugar/${place.id}/comentarios` }}
        >
          Comentarios
        </NavLink>
        <NavLink
          activeClassName="nav-item-active"
          className="nav-link"
          to={{ pathname: `/lugar/${place.id}/ubicacion` }}
        >
          Ubicación
        </NavLink>
      </ul>
    </div>
  );
};


export default NavDetalle
