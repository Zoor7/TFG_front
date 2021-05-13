import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";

import Avatar from "../../../components/avatar/avatar";
import PlacesContext from "../../../context/placesContext/placesContext";
import UserContext from "../../../context/userContext/userContext";
import { addComment as addComment_place } from "../../../services/placesService";
// import { addComment as addComment_user } from "../../../services/userService";
import { createComment } from "../../../services/commentService";

import "./comentarios.scss";
import { useHistory } from "react-router";

const Comentarios = ({ place }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { placesDispatch } = useContext(PlacesContext);
  const { userState } = useContext(UserContext);
  const history = useHistory();

  const onSubmit = (data) => console.log(data);

  const makeComment = async (data) => {
    const comment = {
      author: "6091c207fe3ed61b10fde239",
      author_username: "zoor",
      text: data.comentario,
      isResponse: false,
      place: place.id,
    };

    const newComment = await createComment(comment);

    if (newComment.error) {
      return;
    }
    const commentPlaceIds = {
      commentId: newComment.id,
      placeId: place.id,
    };

    const updatedPlace = await addComment_place(commentPlaceIds);

    placesDispatch({
      type: "UPDATE_PLACE",
      payload: {
        ...updatedPlace,
      },
    });
  };

  return (
    <div className="comentario-container">
      {place.comments.map((comment) => (
        <li style={{ padding: "0.7rem 0" }} key={comment.id}>
          <div className="comment">
            {/* <Avatar img={comment.author.avatar}/> */}
            <p style={{ fontWeight: 600, fontSize: "0.9rem" }}>
              {comment.author_username}
            </p>
            <p className="comentario-comentario">{comment.text}</p>
          </div>
          <p className="fancy">
            <span>Respuestas: {comment.responses.length}</span>
          </p>
        </li>
      ))}
      <form onSubmit={handleSubmit(makeComment)}>
        {!userState.username ? (
          <div className="login-required-container">
            <p
              onClick={() => history.push("/login")}
              // style={{
              //   fontSize: "1rem",
              //   textAlign: "center",
              //   fontWeight: 600,
              //   width: "100%",
              //   padding: "1rem",
              // }}
            >
              Haz login para comentar
            </p>
          </div>
        ) : (
          <div className="">
            <div className="textarea-container">
              <Avatar img={place.author.avatar} />
              <textarea
                {...register("comentario", { maxLength: 200 })}
                className="comment-textarea"
                placeholder="Comenta aqui...."
              ></textarea>
              {errors?.comentario?.type === "maxLength" && (
                <span style={{ color: "red" }}>Mucho texto</span>
              )}
            </div>
            <div className="btn-container">
              <button>Enviar</button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Comentarios;
