import { useContext, useState } from "react";

import { useLocation, useHistory } from "react-router-dom";

import Avatar from "../avatar/avatar";
import InputSelect from "../MaterialUI/Input/InputSelect";

import "./createPlaceCard.scss";
import avatarPlaceholder from "../../assets/images/avatarPlaceholder.webp";
import cameraPlaceholder from "../../assets/images/camera.jpg";

const CreatePlaceCard = () => {
  const [message, setMessage] = useState("");

  let url = useLocation().pathname;
  let history = useHistory();

  const state = {
    name: "hector",
    email: "hector@test.com",
    username: "zoor",
    id: "6091c207fe3ed61b10fde239",
  };

  const myOptions = [
    { name: "Primero", id: 1 },
    { name: "Segundo", id: 2 },
    { name: "Tercero", id: 3 },
  ];

  const handleComment = (str) => {
    setMessage(str);
  };

  //   const {state} = useContext(); //user context

  //   const navigateTo = () => {
  //     if (url === "/") {
  //       history.push({
  //         pathname: urlTo,
  //       });
  //       return;
  //     }
  //     history.replace({
  //       pathname: urlTo,
  //     });
  //   };
  function handleChildClick(e) {
    e.stopPropagation();
  }

  return (
    <div className="createPlaceCard-container">
      <div className="createPlaceCard-header">
        <div className="user-createPlaceCard">
          <Avatar img={state.avatar ? state.avatar : avatarPlaceholder} />
          <p>{state.username}</p>
        </div>
      </div>

      <div className="createPlaceCard-image">
        <img src={cameraPlaceholder} alt="addPhoto" />
      </div>

      <div className="createPlaceCard-descripcion">
        <textarea
          className="description-textarea"
          onChange={(e) => handleComment(e.target.value)}
          maxLength="200"
          placeholder="La descripción debe tener mínimo 10 carácteres"
        ></textarea>
      </div>
      <div className="createPlaceCard-type">
        <InputSelect selectOptions={myOptions} />
      </div>
      <div className="createPlaceCard-web"></div>
      <div className="sendInfoSubmit">
        <button className="createPlaceCard-btn" onClick={() => ""}>
          Enviar
        </button>
      </div>
    </div>
  );
};

export default CreatePlaceCard;
