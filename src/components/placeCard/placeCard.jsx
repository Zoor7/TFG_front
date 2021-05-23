import { useContext, useEffect, useState } from "react";
import { Route, useLocation, useHistory } from "react-router-dom";
import { FaCreativeCommonsSampling, FaMapMarkedAlt, FaRegComment } from "react-icons/fa";
import { BsHeart, BsHeartFill } from "react-icons/bs";

import Avatar from "../avatar/avatar";
import NavDetalle from "../navDetalle/navDetalle";
import Descripcion from "../../pages/Detalle/descripcion/descripcion.jsx";
import Comentarios from "../../pages/Detalle/comentarios/comentarios";
import Ubicacion from "../../pages/Detalle/ubicacion/ubicacion";

// La idea es hacer aquí el añadir los likes, pasarle una función al icono del me gusta y atacar tanto bbdd como actualizar el contexto, lo he probado pero no funciona, básicamente es lo mismo que haces con los comentarios.
import { addPlaceLike, deletePlaceLike } from "../../services/placesService";
import { addUserLike, deleteUserLike } from "../../services/userService";

import "./placecard.scss";
import avatarPlaceholder from "../../assets/images/avatarPlaceholder.webp";
import Mapa from "../Mapa/Mapa";
import UserContext from "../../context/userContext/userContext";
import {
  ADD_USER_LIKE,
  DELETE_USER_LIKE,
} from "../../context/reducers/userReducer";
import {
  ADD_PLACE_LIKES,
  DELETE_PLACE_LIKES,
} from "../../context/reducers/placesreducer";
import PlacesContext from "../../context/placesContext/placesContext";
import { errorToast } from "../toast/customToast";

const PlaceCard = ({ place, urlTo }) => {
  const [like, setLike] = useState();
  let url = useLocation().pathname;
  let history = useHistory();
  const { userState, userDispatch } = useContext(UserContext);
  const { placesState, placesDispatch } = useContext(PlacesContext);

  useEffect(() => {
    const isLiked = userState.likes.filter((userLike) => userLike.id === place.id);
    isLiked[0] ? setLike(true) : setLike(false);
  }, []);

  const handleHeartLike = async () => {
    if (userState.username === "") {
      errorToast("Inicie sesión para dar like.");
      return;
    }
    const obj = {
      userId: userState.id,
      placeId: place.id,
    };
    
    if (!like) {
      await addPlaceLike(obj);
     const infoLike = await addUserLike(obj);
     await userDispatch({
        type: ADD_USER_LIKE,
        payload: infoLike,
      });
     await placesDispatch({
        type: ADD_PLACE_LIKES,
        payload: obj,
      });

    } else {
      userDispatch({
        type: DELETE_USER_LIKE,
        payload: place.id,
      });
      placesDispatch({
        type: DELETE_PLACE_LIKES,
        payload: obj,
      });
      await deletePlaceLike(obj);
      await deleteUserLike(obj);
    }


    setLike(!like);
  };

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
  return (
    <div className="placecard-container" onClick={navigateTo}>
      <div className="placecard-main">
        <div className="placecard-header">
          <div className="user-placecard">
            <Avatar
              img={
                place?.author?.avatar ? place.author.avatar : avatarPlaceholder
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
            onClick={(e) => {
              handleHeartLike();
              handleChildClick(e);
            }}
            className=" placecard-like interaction"
          >
            {like ? (
              <BsHeartFill color="red" size="1.45rem" />
            ) : (
              <BsHeart size="1.45rem" />
            )}
            {place.likes.length}
          </div>
          <div
            className="placecard-comment interaction"
            onClick={(e) => {
              history.push(`/lugar/${place.id}/comentarios`);
              handleChildClick(e);
            }}
          >
            <FaRegComment size="1.45rem" />
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
