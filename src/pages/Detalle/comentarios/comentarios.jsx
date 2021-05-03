import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useMemo,
} from "react";
import { useHistory } from "react-router";
import Avatar from "../../../components/avatar/avatar";
import PlacesContext from "../../../context/placesContext/placesContext";
import { addComment as addComment_place } from "../../../services/placesService";
import { addComment as addComment_user } from "../../../services/userService";
import { addComment as addComment_comment } from "../../../services/commentService";

import "./comentarios.scss";

//ARREGLAR ANADIR COMENTARIO EN PLACES

const Comentarios = ({ place }) => {
  const [message, setMessage] = useState("");
  const { dispatch } = useContext(PlacesContext);
  let history = useHistory();

  const handleComment = useCallback((str) => {
    setMessage(str.target.value);
  }, []);

  const makeComment = async () => {
    const comment = {
      place: place.id,
      author: "608f3ec5acb6dd07b0bf0ad6",
      text: message,
      author_username: "kvothe",
      isResponse: false,
    };

    const newComment = await addComment_comment(comment);

    console.log(newComment);
    console.log(place.id);

    const placeCommentsIds = {
      commentId: newComment.id,
      placeId: place.id,
    };

    const response = await addComment_place(placeCommentsIds);

    console.log(response, "holaaaaaaaaaaaaaaaaaaa");

    dispatch({
      type: "UPDATE_PLACE",
      payload: {
        ...newComment,
      },
    });

    history.push({
      to: "/lugar/comentarios",
      state: {
        place: {
          ...place,
          comments: [...place.comments, ...newComment],
        },
      },
    });

    // console.log(
    //   {
    //     ...res_place,
    //     author: place.author,
    //   },
    //   "aasuhasudhashda"
    // );

    // const newComment = res_place.comments[res_place.comments.length - 1];

    // const comment_user = {
    //   commentId: newComment._id,
    //   userId: newComment.author,
    // };

    // const res_user = await addComment_user(comment_user);
  };

  return (
    <div className="comentario-container">
      {place.comments.map((comment) => (
        <li key={comment.id}>
          <div className="comment">
            {/* <Avatar img={comment.author.avatar}/> */}
            <p style={{ fontWeight: 600, fontSize: "0.9rem" }}>
              {comment.author_username}
            </p>
            <p>{comment.text}</p>
          </div>
          <p className="fancy">
            <span>Respuestas: {comment.responses.length}</span>
          </p>
        </li>
      ))}
      <div className="textarea-container">
        <textarea
          className="comment-textarea"
          onChange={(e) => handleComment(e)}
          maxLength="200"
          placeholder="Comenta aqui...."
        ></textarea>
        <button className="textarea-btn" onClick={makeComment}>
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Comentarios;
