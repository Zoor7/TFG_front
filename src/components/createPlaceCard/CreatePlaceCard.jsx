import { useState } from "react";

// import { useLocation, useHistory } from "react-router-dom";

import Avatar from "../avatar/avatar";

import avatarPlaceholder from "../../assets/images/avatarPlaceholder.webp";
import cameraPlaceholder from "../../assets/images/camera.jpg";
import { useForm } from "react-hook-form";


import "./createPlaceCard.scss";

const CreatePlaceCard = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  
  // const {state} = useContext(); //user context

  const state = {
    name: "hector",
    email: "hector@test.com",
    username: "zoor",
    id: "6091c207fe3ed61b10fde239",
  };

  const onSubmit = data => console.log(data);



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

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="createPlaceCard-descripcion">
          <p style={{ marginBottom: '0.5rem' }}>Descripción</p>
          <input
            {...register('Description', { required: true, minLength: 10, maxLength: 200 })}
            placeholder="Añade la descripción aquí..."
          />
          {errors?.Description?.type==='required' && <span style={{ color: 'red' }}>This field is required</span>}
          {errors?.Description?.type==='minLength' && <span style={{ color: 'red' }}>Minimo 10 caracteres</span>}
          {errors?.Description?.type==='maxLength' && <span style={{ color: 'red' }}>Maximo 200 caracteres</span>}

        </div>
        <div className="createPlaceCard-type">
          <p style={{ alignSelf: 'flex-start', marginBottom: '0.5rem' }}>Tipo de lugar</p>
          <select {...register('Tipo', { required: true })} >
            <option>Monumento</option>
            <option>Naturaleza</option>
            <option>Tipo 3</option>
            <option>Tipo 4</option>
          </select>
          {errors?.Tipo?.type==='required' && <span style={{ color: 'red' }}>This field is required</span>}

        </div>
        <div className="createPlaceCard-web">
          <p style={{ marginBottom: '0.5rem' }}>Pagina Web</p>

          <input
            {...register('Web')}
            placeholder="Añade la página web del lugar si tiene..."
          />
        </div>
        <div className="sendInfoSubmit">
          <input type="submit" className="createPlaceCard-btn" />
        </div>
      </form>

    </div>
  );
};

export default CreatePlaceCard;
