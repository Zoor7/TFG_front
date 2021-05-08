import {  useState } from "react";

// import { useLocation, useHistory } from "react-router-dom";

import Avatar from "../avatar/avatar";


import "./createPlaceCard.scss";
import avatarPlaceholder from "../../assets/images/avatarPlaceholder.webp";
import cameraPlaceholder from "../../assets/images/camera.jpg";
import { InputBase} from "@material-ui/core";

const CreatePlaceCard = () => {
  const [message, setMessage] = useState("");

  // let url = useLocation().pathname;
  // let history = useHistory();

  const state = {
    name: "hector",
    email: "hector@test.com",
    username: "zoor",
    id: "6091c207fe3ed61b10fde239",
  };

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
        <p style={{ marginBottom: '0.5rem' }}>Descripción</p>
        <InputBase
          className='textarea'
          placeholder="Añade la descripción aquí..."
          onChange={e=>handleComment(e.target.value)}
          multiline
        />
      </div>
      <div className="createPlaceCard-type">
        <p style={{alignSelf:'flex-start',marginBottom:'0.5rem'}}>Tipo de lugar</p>
        <select>
          <option>Monumento</option>
          <option>Naturaleza</option>
          <option>Tipo 3</option>
          <option>Tipo 4</option>
        </select>
      </div>
      <div className="createPlaceCard-web">
        Página Web
      <InputBase
          className='textarea'
          placeholder="Añade la página web del lugar si tiene..."
          multiline
        />
      </div>
      <div className="sendInfoSubmit">
        <button className="createPlaceCard-btn" onClick={() => ""}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default CreatePlaceCard;
