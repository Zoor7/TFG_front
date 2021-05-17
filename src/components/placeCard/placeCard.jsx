import { Route, useLocation, useHistory } from "react-router-dom";
import { FaMapMarkedAlt, FaRegComment } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";

import Avatar from "../avatar/avatar";
import NavDetalle from "../navDetalle/navDetalle";
import Descripcion from "../../pages/Detalle/descripcion/descripcion.jsx";
import Comentarios from "../../pages/Detalle/comentarios/comentarios";
import Ubicacion from "../../pages/Detalle/ubicacion/ubicacion";

// La idea es hacer aquí el añadir los likes, pasarle una función al icono del me gusta y atacar tanto bbdd como actualizar el contexto, lo he probado pero no funciona, básicamente es lo mismo que haces con los comentarios.
import { addLike as addPlaceLike } from "../../services/placesService";
import { addLike as addUserLike } from "../../services/userService";

import "./placecard.scss";
import avatarPlaceholder from "../../assets/images/avatarPlaceholder.webp";
import Mapa from "../Mapa/Mapa";

const PlaceCard = ({ place, urlTo }) => {
  let url = useLocation().pathname;
  let history = useHistory();

  const navigateTo = () => {
    if (url === "/") {
      history.push({
        pathname: urlTo,
      });
      return;
    }
    history.replace({
      pathname: urlTo,
    });
  };
  function handleChildClick(e) {
    e.stopPropagation();
  }

  // const like = async

  return (
    <div className="placecard-container" onClick={navigateTo}>
      <div className="placecard-main">
        <div className="placecard-header">
          <div className="user-placecard">
            <Avatar
              img={
                place.author.avatar ? place.author.avatar : avatarPlaceholder
              }
            />
            <p>{place.author.username}</p>
          </div>
          {url.includes("ubicacion") ? null : (
            <FaMapMarkedAlt
              onClick={(event) => {
                handleChildClick(event);
                history.push(`/lugar/${place.id}/ubicacion`);
              }}
              size="1.6rem"
            />
          )}
        </div>

        <div className="placecard-image">
          {url.includes("ubicacion") ? (
            <Mapa place={place} />
          ) : (
            <img src={place.image_url} alt="location" />
          )}
        </div>

        <div className="placecard-footer">
          <div
            onClick={(e) => handleChildClick(e)}
            className=" placecard-like interaction"
          >
            <BsHeart size="1.3rem" />
            {place.likes.length}
          </div>
          <div className="placecard-comment interaction">
            <FaRegComment size="1.3rem" />
            {place.comments.length}
          </div>
        </div>
        {url.includes("lugar") ? (
          <div>
            <NavDetalle place={place} />
          </div>
        ) : null}
        <Route path="/lugar/:id/descripcion">
          <Descripcion text={place.description} />
        </Route>
        <Route path="/lugar/:id/comentarios">
          <Comentarios place={place} />
        </Route>
        <Route path="/lugar/:id/ubicacion">
          <Ubicacion place={place} />
        </Route>
      </div>
    </div>
  );
};

export default PlaceCard;
