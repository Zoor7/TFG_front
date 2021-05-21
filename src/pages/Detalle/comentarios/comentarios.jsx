import React, { useContext } from "react";
import { useForm } from "react-hook-form";

import Avatar from "../../../components/avatar/avatar";
import PlacesContext from "../../../context/placesContext/placesContext";
import UserContext from "../../../context/userContext/userContext";
import { addComment as addComment_place } from "../../../services/placesService";
import { addComment as addComment_user } from "../../../services/userService";
import { createComment } from "../../../services/commentService";

import "./comentarios.scss";
import { useHistory } from "react-router";
import { errorToast } from "../../../components/toast/customToast";
import { ADD_USER_COMMENT } from "../../../context/reducers/userReducer";
import { UPDATE_PLACE } from "../../../context/reducers/placesreducer";

const Comentarios = ({ place }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { placesDispatch } = useContext(PlacesContext);
  const { userState, userDispatch } = useContext(UserContext);
  const history = useHistory();

  const makeComment = async (data) => {
    const comment = {
      author: userState.id,
      author_username: userState.username,
      text: data.comentario,
      isResponse: false,
      place: place.id,
    };

    const newComment = await createComment(comment);

    if (newComment.error) {
      errorToast("Ups, no se ha podido comentar.");
      return;
    }
    const commentPlaceIds = {
      commentId: newComment.id,
      placeId: place.id,
    };

    const updatedPlace = await addComment_place(commentPlaceIds);

    const commentUserIds = {
      commentId: newComment.id,
      userId: userState.id,
    };
    const updatedUser = await addComment_user(commentUserIds);

    placesDispatch({
      type: UPDATE_PLACE,
      payload: {
        ...updatedPlace,
      },
    });

    userDispatch({
      type: ADD_USER_COMMENT,
      payload: {
        ...newComment.id,
      },
    });
  };

  return (
    <div className="comentario-container">
      {place.comments.map((comment) => (
        <li style={{ padding: "0.7rem 0" }} key={comment.id}>
          <div className="comment">
            <Avatar img={comment.author.avatar} />
            <div className="comment-text-container">
              <p className="comment-username">{comment.author_username}</p>
              <p className="comment-text">{comment.text}</p>
            </div>
          </div>
          <p className="fancy">
            <span>Respuestas: {comment.responses.length}</span>
          </p>
        </li>
      ))}
      <form onSubmit={handleSubmit(makeComment)}>
        {!userState.username ? (
          <div className="login-required-container">
            <p onClick={() => history.push("/login")}>
              Haz login para comentar
            </p>
          </div>
        ) : (
          <div className="">
            <div className="textarea-container">
              <Avatar img={userState.avatar} />
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
