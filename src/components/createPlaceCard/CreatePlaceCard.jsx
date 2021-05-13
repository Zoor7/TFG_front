import { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory, Route } from "react-router-dom";

import Avatar from "../avatar/avatar";
import Mapa from "../Mapa/Mapa";
import { uploadPhoto } from "../../services/firebaseStorageService";
import avatarPlaceholder from "../../assets/images/avatarPlaceholder.webp";
import cameraPlaceholder from "../../assets/images/camera.jpg";
import UserContext from "../../context/userContext/userContext";
import PlacesContext from "../../context/placesContext/placesContext";

import { errorToast, successToast } from "../toast/customToast";
import { createPlace } from "../../services/placesService";
import { addLike } from "../../services/userService";
import { ADD_PLACE } from "../../context/reducers/placesreducer";

import "../placeCard/placecard.scss"
import "./createPlaceCard.scss";

const CreatePlaceCard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loadImage, setLoadImage] = useState();
  const [urlImage, setUrlImage] = useState();
  const [position, setPosition] = useState();

  const { userState, userDispatch } = useContext(UserContext);
  const { placesState, placesDispatch } = useContext(PlacesContext);
  const history = useHistory();
  const url = history.location.pathname;

  useEffect(() => {
    setTimeout(() => {
      if (!userState.username) {
        history.replace("/");
      }
    }, 200);
  }, []);

  const getPosFromMapa = (coords) => {
    setPosition(coords);
  };

  const onSubmit = async (data) => {
    if (url === "/create") {
      const foto = await uploadPhoto(data.image[0]);
      setUrlImage(foto);
      history.push("/create/ubicacion");
      return;
    }
    const newPlace = {
      author: userState.id,
      description: data.description,
      image_url: urlImage,
      location: { type: "Point", coordinates: [position.lat, position.lng] },
      web: data?.web,
      type: data.tipo,
    };

    const placeCreated = await createPlace(newPlace);

    if (placeCreated.error) {
      errorToast("Ups, algo ha salido mal");
      return;
    }

    const obj = {
      userId: userState.id,
      placeId: placeCreated.id,
    };

    const res = addLike(obj);
    console.log(res);

    placesDispatch({ type: ADD_PLACE, payload: placeCreated });
    userDispatch({ type: "ADD_USER_PLACE", payload: placeCreated.id });
    successToast("Lugar Creado", 3000);
    history.replace("/");

    //successToast("Lugar creado!", 3000);
  };

  const previewFile = (event) => {
    const img = URL.createObjectURL(event.target.files[0]);
    setLoadImage(img);
  };

  return (
    <div className="placecard-container">
      <div className="placecard-main">
      <div className="placecard-header">
        <div className="user-placecard">
          <Avatar
            img={userState.avatar ? userState.avatar : avatarPlaceholder}
          />
          <p>{userState.username}</p>
        </div>
      </div>

      <div className="placecard-image">
        {url === "/create/ubicacion" ? (
          <Mapa create={true} getPos={getPosFromMapa} />
        ) : (
          <div>
            <img src={loadImage || cameraPlaceholder} alt="addPhoto" />
            <input
              {...register("image", { required: true })}
              type="file"
              className="create-inputFile"
              accept="image/png, image/jpeg"
              onChange={(e) => previewFile(e)}
            />
            {errors?.image?.type === "required" && (
              <span style={{ color: "red" }}>This field is required</span>
            )}
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="createPlaceCard-descripcion">
          <p style={{ marginBottom: "0.5rem" }}>Descripción</p>
          <input
            {...register("description", {
              required: true,
              minLength: 10,
              maxLength: 200,
            })}
            placeholder="Añade la descripción aquí..."
          />
          {errors?.description?.type === "required" && (
            <span style={{ color: "red" }}>This field is required</span>
          )}
          {errors?.description?.type === "minLength" && (
            <span style={{ color: "red" }}>Minimo 10 caracteres</span>
          )}
          {errors?.description?.type === "maxLength" && (
            <span style={{ color: "red" }}>Maximo 200 caracteres</span>
          )}
        </div>
        <div className="createPlaceCard-type">
          <p style={{ alignSelf: "flex-start", marginBottom: "0.5rem" }}>
            Tipo de lugar
          </p>
          <select {...register("tipo", { required: true })}>
            <option>Monumento</option>
            <option>Naturaleza</option>
            <option>Tipo 3</option>
            <option>Tipo 4</option>
          </select>
          {errors?.tipo?.type === "required" && (
            <span style={{ color: "red" }}>This field is required</span>
          )}
        </div>
        <div className="createPlaceCard-web">
          <p style={{ marginBottom: "0.5rem" }}>Pagina Web</p>

          <input
            {...register("web")}
            placeholder="Añade la página web del lugar si tiene..."
          />
        </div>
        <div className="sendInfoSubmit">
          <input
            type="submit"
            className="createPlaceCard-btn"
            value={url === "/create/ubicacion" ? "Terminar" : "Siguiente"}
          />
        </div>
      </form>
      </div>
    </div>
  );
};

export default CreatePlaceCard;
